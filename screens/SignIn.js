/*
Pendências:
    - Caso o usuario ja tenha uma conta, colocar a tela de "ja possui uma conta"
    - Consertar o sistema de campos obrigatorios
    - Forçar o usuario a entrar apenas com uma conta valida
    - impedir que o usuario volte para essa tela se apertar o botao de voltar
    - Criar o sistema de esqueci minha senha
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

  email: yup
    .string()
    .label('E-mail')
    .email('E-mail invalido')
    .required("Esse é um campo obrigatório"),
  password: yup
    .string()
    .required("Esse é um campo obrigatório")
    .min(6, 'Senha muito curta')
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
  } return (
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

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {
        email: '',
        password: ''
      },
      invalid_session: false
    }
  }

  async connectAction() {
    axios.post('/sessions', {
      email: this.state.values.email,
      password: this.state.values.password
    })
    .then(response => {
      GLOBALS.TOKEN = response.data.token
      GLOBALS.EMAIL = this.state.text_email
      if (response.data.token !== undefined && !this.state.invalid_session) {
        this.props.navigation.navigate('MyPills')
      }
    })
    .catch(err => {
      console.log('Erro: ' + JSON.stringify(err.response.data))
      this.state.invalid_session = true
    })
  }

  render() {
    return (
      <SafeAreaView style={Style.container}>
        <ScrollView>
          <BoldText style={Style.text1_login}>Olá</BoldText>
          <RegularText style={Style.text2_login}>
            Controle seus remédios e encontre amostras grátis.
        </RegularText>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values, actions) => {
              this.state.values = values
              this.connectAction()
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
                  textContentType='password'
                  autoCapitalize='none'
                  secureTextEntry={true}
                  maxLength={25}
                  style={Style.text_inputs}
                  onChangeText={formikProps.handleChange('password')}
                />

                { this.state.invalid_session ? (
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <TouchableOpacity>
                      <Image style={Style.icon_warning} source={require('../assets/images/ic_warning.png')} resizeMode="contain"/>
                    </TouchableOpacity>
                    <Text style={Style.text_error}>Usuário não encontrado</Text>
                  </View>           
                ) : (
                  <Text style={Style.text_error}></Text>
                )}

              {formikProps.isSubmitting ? (
                <ActivityIndicator/>
              ) : (
                <View style={Style.view_button_submit}>
                  <TouchableOpacity style={Style.button_submit} onPress={ formikProps.handleSubmit }/* onPress={() => { this.props.navigation.navigate('MyPills') }}*/>
                    <LinearGradient
                      colors={['#48AAD4', '#45C4E3']}
                      style={Style.gradient_button}
                      start={[0.0, 0.0]}
                      end={[1.0, 1.0]}
                    >
                      <RegularText style={Style.text_submit}>Entrar</RegularText>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              )}
              </React.Fragment>
            )}
          </Formik>
          <TouchableOpacity style={Style.button_forgot} onPress={() => { this.props.navigation.navigate('ForgotPassword') }}>
            <RegularText style={Style.text_forgot}>Esqueci a senha</RegularText>
          </TouchableOpacity>
          {/* <View style={Style.view_separator}>
            <View style={Style.separator} />
          </View>
          <RegularText style={Style.text5_login}>Entrar pelo Google ou Facebook</RegularText>
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