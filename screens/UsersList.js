import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import Style from '../style/Style'
import { MonoText } from '../components/StyledText';

import axios from 'axios'

export default class UsersList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  async getUsers() {
    axios.get("https://potato-back.herokuapp.com/users")
      .then(response => {
        this.setState({ data: response.data })
      })
      .catch(err => {
        alert('Não foi possível capturar os dados');
      });
  }

  render() {
    return (
      <View style={Style.container}>
        <MonoText style={Style.screenTitle}> CALOUROS </MonoText>
        <FlatList
          data={this.state.data}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) =>
            <View
              style={Style.view_card_medicine}
              key={item.id}
              {...item}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <MonoText style={Style.text_name_medicine}>{item.username}</MonoText>
                <MonoText style={Style.text_name_medicine}>{item.score}</MonoText>
              </View>
            </View>
          }
        />
      </View>
    );
  };

}