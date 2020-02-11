
import React, { Component } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Style from '../style/Style'
import { MonoText } from '../components/StyledText';
import GLOBALS from "../constants/Globals";

export default class PranksList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pranksDone: 0,
      pass: '',
    };
  }

  increaseStore() {
    let aux = this.state.pranksDone + 1;
    this.setState({ pranksDone: this.state.pranksDone + 1 });
    alert('Você cumpriu ' + aux + ' trote(s) hoje!');
  }

  resetStore() {
    this.setState({ pranksDone: 0 });
    alert('Trotes de hoje zerados!');
  }

  prank() {
    if (this.state.pass == GLOBALS.PRANK_PASS) alert('Seus dados foram enviados para o banco de dados');
    else alert('VOCÊ TA TENTANDO ROUBAR???!');
  }

  render() {
    return (
      <View style={Style.container}>
        <MonoText style={Style.screenTitle}> TROTES </MonoText>
        {/* <MonoText style={{ ...Style.screenTitle, marginTop: 0 }}> 33/33 </MonoText> */}
        <ScrollView>
          <View style={Style.view_card_medicine}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_medicine}>Não pode usar o elevador</MonoText>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.increaseStore()} style={Style.view_card_medicine}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_medicine}>Doar alimentos</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increaseStore()} style={Style.view_card_medicine}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_medicine}>Plaquinha escrito: "SÓ FAÇO POG"</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increaseStore()} style={Style.view_card_medicine}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_medicine}>Ecrever no corpo: "#EUAMOLAPA"</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increaseStore()} style={Style.view_card_medicine}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_medicine}>Cabos amarrados pelo corpo</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increaseStore()} style={Style.view_card_medicine}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_medicine}>Foto criativa no Instagram</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increaseStore()} style={Style.view_card_medicine}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_medicine}>Foto criativa no Facebook</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increaseStore()} style={Style.view_card_medicine}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_medicine}>Camisa por dentro da calça</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increaseStore()} style={Style.view_card_medicine}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_medicine}>Meia por cima da calça</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increaseStore()} style={Style.view_card_medicine}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_medicine}>Sapatos de pares diferentes</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increaseStore()} style={Style.view_card_medicine}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_medicine}>Material em saco de lixo</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increaseStore()} style={Style.view_card_medicine}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_medicine}>Tirar uma foto com Atari</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increaseStore()} style={Style.view_card_medicine}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_medicine}>Tirar uma foto com as gêmeas Nina e Bel (JUNTAS)</MonoText>
            </View>
          </TouchableOpacity>
          <View style={Style.view_text_inputs} >
            <TextInput
              style={Style.text_inputs}
              autoCompleteType='password'
              textContentType='password'
              autoCapitalize='none'
              secureTextEntry={true}
              onChangeText={(txt) => this.setState({ pass: txt })}
            />
          </View>
          <View style={{ flexDirection: "row", padding: 20 }}>
            <View style={Style.view_button_submit}>
              <TouchableOpacity
                style={Style.button_submit}
                onPress={() => this.resetStore()}
              >
                <MonoText style={Style.text_submit}>Zerar</MonoText>
              </TouchableOpacity>
            </View>
            <View style={Style.view_button_submit}>
              <TouchableOpacity
                style={Style.button_submit}
                onPress={() => this.prank()}
              >
                <MonoText style={Style.text_submit}>Validar</MonoText>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  };

}