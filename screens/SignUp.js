/*
Pendências:
    - Criar realmente uma conta no banco
    - Consertar o sistema de campos obrigatorios
    - Impedir que o usuario digite informacoes invalidas
*/

import React, { Component } from 'react';
import {
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import Style from '../style/Style'
import * as yup from 'yup';
import { Formik } from 'formik';
import BoldText from '../components/BoldText'
import RegularText from '../components/RegularText'
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios'
import GLOBALS from '../constants/Globals'

const FieldWrapper = ({ children, label, formikProps, formikKey }) => (
  <View style={{ marginHorizontal: 20, marginVertical: 1 }}>
    <RegularText style={Style.text4_login}>{label}</RegularText>
    {children}
    <RegularText style={{ color: 'red', fontFamily: 'Poppins-Regular', fontSize: 11 }}>
      {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
    </RegularText>
  </View>
);

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .label('Nome')
    .required("Esse é um campo obrigatório"),
  email: yup
    .string()
    .label('E-mail')
    .email('E-mail invalido')
    .required("Esse é um campo obrigatório"),
  password: yup
    .string()
    .required("Esse é um campo obrigatório")
    .min(6, 'Senha muito curta')
    .max(25, 'Senha muito longa'),
  confirmPassword: yup
    .string()
    .required("Esse é um campo obrigatório")
    .test('passwords-match', 'As senhas não são iguais', function(value) {
      return this.parent.password === value 
    }),
});

const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {
  const inputStyles = {
    marginTop: 1,
    width: '100%',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 1,
  };

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.backgroundColor = '#48AAD4';
  }
  return (
    <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
      <TextInput
        style={Style.text3_login}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
    </FieldWrapper>
  );
};

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      error: {
        message: '',
        token: 0
      }
    }
  }

  checkPasswordMatch() {
    if (this.state.values.password === this.state.values.confirmPassword) return true
    return false
  }

  async registerAction() {
    if (this.checkPasswordMatch()) {
      const data = {
        name: this.state.values.name,
        email: this.state.values.email,
        password: this.state.values.password,
        type_connection: 'local'
      }
      axios.post('/register', data)
      .then(response => {
        GLOBALS.EMAIL = response.data.email
        GLOBALS.ID = response.data.id 
        GLOBALS.USERNAME = response.data.name
        this.props.navigation.navigate('Cellphone')
      })
      .catch(err => {
        console.log('Erro: ' + JSON.stringify(err.response.data))
        this.state.error.message = err.response.data.error
        this.state.error.token = err.response.data.error_token
      })

    } else {
      console.log('Senhas não são iguais')
    }
  }

  render() {
    return (
      <SafeAreaView style={Style.container}>
        <ScrollView>
          <BoldText style={Style.text1_login}>Olá</BoldText>
          <RegularText style={Style.text2_login}>
            Crie sua conta, é fácil!
        </RegularText>
          <View>
            <Formik
              initialValues={{
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
              }}
              onSubmit={(values, actions) => {
                this.state.values = values
                this.registerAction()
                setTimeout(() => {
                  actions.setSubmitting(false)
                }, 4000)
              }}
              validationSchema={validationSchema}
            >
              {formikProps => (
                <React.Fragment>

                  <StyledInput
                    formikProps={formikProps}
                    label="Nome"
                    formikKey="name"
                    placeholder="Nome"
                    autoCapitalize='words'
                    autoCompleteType='name'
                    textContentType='name'
                    style={Style.text_inputs}
                    onChangeText={formikProps.handleChange('name')}
                  />

                  <StyledInput
                    formikProps={formikProps}
                    label="E-mail"
                    formikKey="email"
                    placeholder="seunome@exemplo.com"
                    autoCapitalize='none'
                    autoCompleteType='email'
                    textContentType='emailAddress'
                    style={Style.text_inputs}
                    onChangeText={formikProps.handleChange('email')}
                  />

                  <StyledInput
                    formikProps={formikProps}
                    label="Senha"
                    formikKey="password"
                    placeholder="Senha"
                    autoCompleteType='password'
                    textContentType='newPassword'
                    autoCapitalize='none'
                    secureTextEntry={true}
                    style={Style.text_inputs}
                    onChangeText={formikProps.handleChange('password')}
                  />

                  <StyledInput
                    formikProps={formikProps}
                    label="Confirmar senha"
                    formikKey="confirmPassword"
                    placeholder="Senha"
                    autoCompleteType='password'
                    textContentType='newPassword'
                    autoCapitalize='none'
                    secureTextEntry={true}
                    style={Style.text_inputs}
                    onChangeText={formikProps.handleChange('confirmPassword')}
                  />

                { this.state.error.token !== 0 ? (
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <TouchableOpacity>
                      <Image style={Style.icon_warning} source={require('../assets/images/ic_warning.png')} resizeMode="contain"/>
                    </TouchableOpacity>
                    <Text style={Style.text_error}>{this.state.error.message}</Text>
                  </View>           
                ) : (
                  <Text style={Style.text_error}></Text>
                )}

                  {formikProps.isSubmitting ? (
                    <ActivityIndicator/>
                  ) : (
                    <View style={{marginBottom: 20, ...Style.view_button_submit}}>
                      <TouchableOpacity style={Style.button_submit} onPress={ formikProps.handleSubmit }>
                        <LinearGradient
                          colors={['#48AAD4', '#45C4E3']}
                          style={Style.gradient_button}
                          start={[0.0, 0.0]}
                          end={[1.0, 1.0]}
                        >
                          <RegularText style={Style.text_submit}>Cadastrar-se</RegularText>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  )}
                </React.Fragment>
              )}
            </Formik>
          </View>
          
          <View style={Style.view_separator}>
            <View style={Style.separator} />
          </View>

          {/* <RegularText style={Style.text5_login}>Cadastrar-se pelo Google ou Facebook</RegularText>
          <View style={Style.login_google_facebook}>
            <TouchableOpacity>
              <Image source={require('../assets/images/icon_google.png')} style={Style.icon_google} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/images/icon_facebook.png')} style={Style.icon_face} resizeMode="contain" />
            </TouchableOpacity>
          </View> */}
        </ScrollView>
      </SafeAreaView>

    );
  }

}

//email invalido

//a senha precisa ter entre 6 e 25 caracteres

//as senhas nao sao iguais

//preencha todos os campos