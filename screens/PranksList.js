
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
import axios from "axios";

export default class PranksList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pranksDone: 0,
      pass: '',
      score: GLOBALS.SCORE,
    };
  }


  async increaseScore() {
    axios.put("https://potato-back.herokuapp.com/espertinho/" + GLOBALS.ID, { new_score: this.state.score + 10 })
      .then(response => {
        this.setState({ score: this.state.score + 10 });
        this.setState({ pass: "" })
        this.resetPranksDone();
        alert('SE FODEU HAHAHAH');
      })
      .catch(err => {
        alert('Não foi possível atualizar seus dados, cheque sua conexão de internet');
      });
  }

  async decreaseScore() {
    axios.put("https://potato-back.herokuapp.com/espertinho/" + GLOBALS.ID, { new_score: this.state.score - this.state.pranksDone })
      .then(response => {
        this.setState({ score: this.state.score - this.state.pranksDone });
        this.setState({ pass: "" })
        this.resetPranksDone();
        alert('Seus dados foram enviados para o banco de dados');
      })
      .catch(err => {
        alert('Não foi possível atualizar seus dados, cheque sua conexão de internet');
      });
  }

  increasePranksDone() {
    this.setState({ pranksDone: this.state.pranksDone + 1 });
  }

  resetPranksDone() {
    this.setState({ pranksDone: 0 });
  }

  validate() {
    if (this.state.pass == "espertinho") this.decreaseScore();
    else if (this.state.pass == "sefodeu") this.increaseScore();
    else alert('VOCÊ TA TENTANDO ROUBAR???!');
  }

  render() {
    return (
      <View style={Style.container}>
        <MonoText style={Style.screen_title}> TROTES </MonoText>
        <MonoText style={{ ...Style.screen_title, marginTop: 0 }}> OVADAS: {this.state.score} </MonoText>
        <ScrollView>
          <View style={Style.view_card_prank}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_prank}>Não pode usar o elevador</MonoText>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.increasePranksDone()} style={Style.view_card_prank}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_prank}>Doar alimentos</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increasePranksDone()} style={Style.view_card_prank}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_prank}>Plaquinha escrito: "SÓ FAÇO POG"</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increasePranksDone()} style={Style.view_card_prank}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_prank}>Ecrever no corpo: "#EUAMOLAPA"</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increasePranksDone()} style={Style.view_card_prank}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_prank}>Cabos amarrados pelo corpo</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increasePranksDone()} style={Style.view_card_prank}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_prank}>Foto criativa no Instagram</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increasePranksDone()} style={Style.view_card_prank}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_prank}>Foto criativa no Facebook</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increasePranksDone()} style={Style.view_card_prank}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_prank}>Camisa por dentro da calça</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increasePranksDone()} style={Style.view_card_prank}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_prank}>Meia por cima da calça</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increasePranksDone()} style={Style.view_card_prank}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_prank}>Sapatos de pares diferentes</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increasePranksDone()} style={Style.view_card_prank}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_prank}>Material em saco de lixo</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increasePranksDone()} style={Style.view_card_prank}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_prank}>Tirar uma foto com Atari, ambos de camisa social</MonoText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increasePranksDone()} style={Style.view_card_prank}>
            <View style={{ flex: 1 }}>
              <MonoText style={Style.text_name_prank}>Tirar uma foto com as gêmeas (JUNTAS)</MonoText>
            </View>
          </TouchableOpacity>
          <MonoText style={Style.screen_title}>HOJE: {this.state.pranksDone} </MonoText>
          <View style={{ ...Style.view_text_inputs, marginTop: 0 }} >
            <TextInput
              style={Style.text_inputs}
              autoCompleteType='password'
              textContentType='password'
              autoCapitalize='none'
              secureTextEntry={true}
              onChangeText={(txt) => this.setState({ pass: txt })}
              value={this.state.pass}
            />
          </View>
          <View style={{ flexDirection: "row", paddingVertical: 20 }}>
            <View style={{...Style.view_button_submit, paddingRight: 10}}>
              <TouchableOpacity
                style={Style.button_submit}
                onPress={() => this.resetPranksDone()}
              >
                <MonoText style={Style.text_submit}>Zerar</MonoText>
              </TouchableOpacity>
            </View>
            <View style={{...Style.view_button_submit, paddingLeft: 10}}>
              <TouchableOpacity
                style={Style.button_submit}
                onPress={() => this.validate()}
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
