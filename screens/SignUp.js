import React, { Component } from "react";
import {
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import Style from "../style/Style";
import * as yup from "yup";
import { Formik } from "formik";
import { MonoText } from "../components/StyledText";
import GLOBALS from "../constants/Globals";
import api from '../api/api'

const FieldWrapper = ({ children, label, formikProps, formikKey }) => (
  <View style={{ marginHorizontal: 20, marginVertical: 1 }}>
    <MonoText style={Style.text4_login}>{label}</MonoText>
    {children}
    <MonoText
      style={{ color: "red", fontFamily: "space-mono", fontSize: 11 }}
    >
      {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
    </MonoText>
  </View>
);

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .label("Nome")
    .required("Esse é um campo obrigatório"),
  email: yup
    .string()
    .label("E-mail")
    .email("E-mail invalido")
    .required("Esse é um campo obrigatório"),
  password: yup
    .string()
    .required("Esse é um campo obrigatório")
    .min(2, "Senha muito curta")
    .max(25, "Senha muito longa"),
  confirmPassword: yup
    .string()
    .required("Esse é um campo obrigatório")
    .test("passwords-match", "As senhas não são iguais", function (value) {
      return this.parent.password === value;
    })
});

const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {
  const inputStyles = {
    marginTop: 1,
    width: "100%",
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 1
  };

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.backgroundColor = "#48AAD4";
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
    super(props);
    this.state = {
      values: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      error: {
        message: "",
        token: 0
      }
    };
  }

  checkPasswordMatch() {
    if (this.state.values.password === this.state.values.confirmPassword)
      return true;
    return false;
  }

  async registerAction() {
    if (this.checkPasswordMatch()) {
      const data = {
        username: this.state.values.name,
        email: this.state.values.email,
        password: this.state.values.password,
      };
      
        api.post("/register", data)
        .then(response => {
	alert("Conta criada com sucesso!!");
        })
        .catch(err => {
          console.log("Erro: " + JSON.stringify(err.response.data));
          this.state.error.message = err.response.data.error;
          this.state.error.token = err.response.data.error_token;
        });
    } else {
      console.log("Senhas não são iguais");
    }
  }

  render() {
    return (
      <SafeAreaView style={{ ...Style.container, alignItems: 'center', flexDirection: 'row' }}>
        <ScrollView>
          <View>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: ""
              }}
              onSubmit={(values, actions) => {
                this.state.values = values;
                this.registerAction();
                setTimeout(() => {
                  actions.setSubmitting(false);
                }, 4000);
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
                    autoCapitalize="words"
                    autoCompleteType="name"
                    textContentType="name"
                    style={Style.text_inputs}
                    placeholderTextColor="#00FF41"
                    onChangeText={formikProps.handleChange("name")}
                  />
                  <StyledInput
                    formikProps={formikProps}
                    label="E-mail"
                    formikKey="email"
                    placeholder="seunome@exemplo.com"
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    placeholderTextColor="#00FF41"
                    style={Style.text_inputs}
                    onChangeText={formikProps.handleChange("email")}
                  />
                  <StyledInput
                    formikProps={formikProps}
                    label="Senha"
                    formikKey="password"
                    placeholder="Senha"
                    autoCompleteType="password"
                    textContentType="newPassword"
                    autoCapitalize="none"
                    placeholderTextColor="#00FF41"
                    secureTextEntry={true}
                    style={Style.text_inputs}
                    onChangeText={formikProps.handleChange("password")}
                  />
                  <StyledInput
                    formikProps={formikProps}
                    label="Confirmar senha"
                    formikKey="confirmPassword"
                    placeholder="Senha"
                    autoCompleteType="password"
                    textContentType="newPassword"
                    autoCapitalize="none"
                    placeholderTextColor="#00FF41"
                    secureTextEntry={true}
                    style={Style.text_inputs}
                    onChangeText={formikProps.handleChange("confirmPassword")}
                  />
                  {this.state.error.token !== 0 ? (
                      <Text style={Style.text_error}>
                        {this.state.error.message}
                      </Text>
                  ) : (
                      <Text style={Style.text_error}></Text>
                    )}
                  {formikProps.isSubmitting ? (
                    <ActivityIndicator />
                  ) : (
                      <View
                        style={{ marginBottom: 20, ...Style.view_button_submit }}
                      >
                        <TouchableOpacity
                          style={Style.button_submit}
                          onPress={formikProps.handleSubmit}
                        >
                          <MonoText style={Style.text_submit}>
                            Cadastrar-se
                          </MonoText>
                        </TouchableOpacity>
                      </View>
                    )}
                </React.Fragment>
              )}
            </Formik>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
