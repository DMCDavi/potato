import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
} from 'react-native';

import Style from '../style/Style'
import { MonoText } from '../components/StyledText';
import PrankCard from '../components/PrankCard';

export default class HomeScreen extends Component {

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
        <MonoText style={Style.screenTitle}> TROTES </MonoText>
        <MonoText style={{ ...Style.screenTitle, marginTop: 0 }}> 33/33 </MonoText>
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

HomeScreen.navigationOptions = {
  header: null,
};
















/*
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />

          <Text style={styles.getStartedText}>Get started by opening</Text>

          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>

          <Text style={styles.getStartedText}>
            Hello World
          </Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              Help, it didn’t automatically reload!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

*/