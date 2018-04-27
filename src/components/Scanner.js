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

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class Scanner extends Component {
  state ={
    sacnData: null
  }
  onSuccess(e) {
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
    //console.log(e.data);
    this.setState({
      sacnData: e.data
    })
  }

  render() {
    return (
      <ScrollView>
        <QRCodeScanner
          onRead={this.onSuccess.bind(this)}
          reactivate = {true}
          reactivateTimeout = {2000}
          showMarker = {true}
          topContent={
            <Text style={styles.centerText}>
              Scan Your QRCode
            </Text>
          }
          bottomContent={
            // <TouchableOpacity style={styles.buttonTouchable}>
            //   <Text style={styles.buttonText}>OK. Got it!</Text>
            // </TouchableOpacity>
            <View style={styles.QRCodeDetailsContainer}>
              <Text>{this.state.sacnData}</Text>
            </View>
          }
        />
       
      </ScrollView>    
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
