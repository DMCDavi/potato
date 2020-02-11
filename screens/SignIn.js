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
import axios from "axios";

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
  email: yup
    .string()
    .label("E-mail")
    .email("E-mail invalido")
    .required("Esse é um campo obrigatório"),
  password: yup
    .string()
    .required("Esse é um campo obrigatório")
    .min(2, "Senha muito curta")
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

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        password: ""
      },
      invalid_session: false
    };
  }

  async connectAction() {
    axios.post("https://potato-back.herokuapp.com/sessions", {
      email: this.state.values.email,
      password: this.state.values.password
    })
      .then(response => {
        this.props.navigation.navigate("PranksList");
      })
      .catch(err => {
        console.log("Erro: " + JSON.stringify(err.response.data));
        this.state.invalid_session = true;
      });
  }

  render() {
    return (
      <SafeAreaView style={{ ...Style.container, alignItems: 'center', flexDirection: 'row' }}>
        <ScrollView>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            onSubmit={(values, actions) => {
              this.state.values = values;
              this.connectAction();
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
                  label="E-mail"
                  formikKey="email"
                  placeholder="seunome@exemplo.com"
                  autoCapitalize="none"
                  autoCompleteType="email"
                  textContentType="emailAddress"
                  style={Style.text_inputs}
                  placeholderTextColor="#00FF41"
                  onChangeText={formikProps.handleChange("email")}
                />

                <StyledInput
                  formikProps={formikProps}
                  label="Senha"
                  formikKey="password"
                  placeholder="Senha"
                  autoCompleteType="password"
                  textContentType="password"
                  autoCapitalize="none"
                  placeholderTextColor="#00FF41"
                  secureTextEntry={true}
                  maxLength={25}
                  style={Style.text_inputs}
                  onChangeText={formikProps.handleChange("password")}
                />

                {this.state.invalid_session ? (
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <MonoText style={Style.text_error}>Usuário não encontrado</MonoText>
                  </View>
                ) : (
                    <Text style={Style.text_error}></Text>
                  )}

                {formikProps.isSubmitting ? (
                  <ActivityIndicator />
                ) : (
                    <View style={Style.view_button_submit}>
                      <TouchableOpacity
                        style={Style.button_submit}
                        /*onPress={
                          formikProps.handleSubmit
                        }*/
                        onPress={
                          () => this.props.navigation.navigate("PranksList")
                        }
                      >

                        <MonoText style={Style.text_submit}>
                          Entrar
                        </MonoText>
                      </TouchableOpacity>
                    </View>
                  )}
              </React.Fragment>
            )}
          </Formik>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
