import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  ScrollView
} from 'react-native';

import QRCode from 'react-qr-code';

export default class QRCodeGenerator extends Component {
    state = {
        QRData: "Name: Rajiv Shrestha"
    }
  render() {
    return (
      <View>
          <QRCode value={this.state.QRData} />
      </View>   
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
    fontWeight: '500',
    color: '#000',
  },
  QRCodeDetailsContainer: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
