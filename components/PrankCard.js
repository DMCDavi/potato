import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import Style from '../style/Style'
import { MonoText } from './StyledText'


export default class PrankCard extends Component {
    render() {
        return (
            <TouchableOpacity style={Style.view_card_medicine}>
                <View style={{ flex: 1 }}>
                    <MonoText style={Style.text_name_medicine}>I AM A PRANK</MonoText>
                </View>

            </TouchableOpacity>
        );
    }
}