import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  View,
} from 'react-native';

import Style from '../style/Style'
import { MonoText } from '../components/StyledText';

export default class RoyaltyScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pranksDone: 0,
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

  render() {
    return (
      <View style={Style.container}>
        <MonoText style={Style.screenTitle}> VETERANOS QUE VALEM A PENA </MonoText>
        <ScrollView>
          <View style={{ width: '100%', height: 400, }}>
            <Image source={require('../assets/images/atari.jpg')} style={Style.img_clinic} />
          </View>
          <View style={Style.view_text_clinic}>
            <MonoText style={Style.text1_clinic}>Atari</MonoText>
            <MonoText style={Style.text1_clinic}>
              Essa é Atari, a tartaruga, ela pode ser dura as vezes mas a vdd é que ela não tem coração mesmo,
              qualquer demonstração de afeto tem que ser considerada como ameaça.
              Um dia todos serão os seus meros funcionários, então é melhor fazer tudo q ela manda.
            </MonoText>
          </View>
          <View style={{ width: '100%', height: 400, }}>
            <Image source={require('../assets/images/davi.jpg')} style={Style.img_clinic} />
          </View>
          <View style={Style.view_text_clinic}>
            <MonoText style={Style.text1_clinic}>Davi</MonoText>
            <MonoText style={Style.text1_clinic}>
              Esse é Davi, mais comumente conhecido como Veganinho Gameplays, nome engraçado para um vegetariano que tinha um canal de gameplay no youtube. Mas isso é passado, agora ele desenvolveu a habilidade de assumir diversas formas animais, como gado e macaco. Tenha cuidado, talvez seu gosto peculiar por menores de idade tenha criado tamanha insanidade mental que até um gato e um calango se arrependeram de estarem em seu caminho
            </MonoText>
          </View>
          <View style={{ width: '100%', height: 400, }}>
            <Image source={require('../assets/images/grao.jpg')} style={Style.img_clinic} />
          </View>
          <View style={Style.view_text_clinic}>
            <MonoText style={Style.text1_clinic}>Grão</MonoText>
            <MonoText style={Style.text1_clinic}>
              Esse é Grão, as vezes zinho as vezes zão, todo dia aparece com uma forma nova de perder um emprego, tão emo que parece que não saiu de 2010. PS: não escutem matuê perto dele que ele surta
            </MonoText>
          </View>
          <View style={{ width: '100%', height: 400, }}>
            <Image source={require('../assets/images/leo.jpeg')} style={Style.img_clinic} />
          </View>
          <View style={Style.view_text_clinic}>
            <MonoText style={Style.text1_clinic}>Leo: O Brabo</MonoText>
            <MonoText style={Style.text1_clinic}>
              Herou, meu nome é Léo. na vdd eu sou veterano dos veteranos dos seus veteranos e mesmo assim estou mais longe do que vcs de me formar. estou aqui de ousado então não falem comigo no corredor xd e se estiverem na duvida entre sair do curso ou ficar minha resposta é "sim"
            </MonoText>
          </View>
          <View style={{ width: '100%', height: 400, }}>
            <Image source={require('../assets/images/maria.jpeg')} style={Style.img_clinic} />
          </View>
          <View style={Style.view_text_clinic}>
            <MonoText style={Style.text1_clinic}>Mariazinha</MonoText>
            <MonoText style={Style.text1_clinic}>
              Oi, meu nome é Maria, na verdade eu sou de humanas. Tenho a capacidade de manipular o tempo  e tenho uma vida noturna na UFBA. Meu futuro é ter 78 mestrados e uma pós graduação em letras, porque só assim serei capaz de dominar o mundo com meu grande cérebro.
            </MonoText>
          </View>
<View style={{ width: '100%', height: 400, }}>
            <Image source={require('../assets/images/vergne.jpg')} style={Style.img_clinic} />
          </View>
          <View style={Style.view_text_clinic}>
            <MonoText style={Style.text1_clinic}>???????</MonoText>
            <MonoText style={Style.text1_clinic}>
              Vergne, Vagner, Fagner, Verbo, Verme, Vargas, Getúlio, Velho, Vagem, Vergamota, Vermelho, Venoninho, William, Fernando, Guilherme, Guimilho, Guimarães, Guigui, Gugu...
            </MonoText>
          </View>
<View style={{ width: '100%', height: 400, }}>
            <Image source={require('../assets/images/fernanda.jpg')} style={Style.img_clinic} />
          </View>
          <View style={Style.view_text_clinic}>
            <MonoText style={Style.text1_clinic}>Farinha</MonoText>
            <MonoText style={Style.text1_clinic}>
              Uma das pessoas mais radioativas do SENAI, Fernandinha tem a capacidade de transformar em perguntas o que deveriam ser as respostas. Cuidado, pois seu comportameno tóxico pode acabar indo longe demais!
            </MonoText>
          </View>
        </ScrollView>
      </View>
    );
  };

}
