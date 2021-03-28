import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import AllInOneSDKManager from 'paytm_allinone_react-native';
import {Button} from 'react-native-elements';

const paytm_image = require('../assets/paytm1.png');


function PaymentScreen() {
  return (
    <View style={styles.container}>
      <Button
      buttonStyle={{
        height: 50,
        width: 300,
        backgroundColor: '#05b1eb',
      }}
      title='Pay with Paytm'
      titleStyle={{
        fontWeight: 'bold',
        fontSize: 22,
      }}
      iconRight={true}
      icon={{paytm_image}}
      >

      </Button>

      <Button
      buttonStyle={{
        height: 50,
        width: 300,
        backgroundColor: '#000',
        marginTop: 30,
      }}
      title='Pay with Google Pay'
      titleStyle={{
        fontWeight: 'bold',
        fontSize: 22,
      }}
      iconRight={true}
      icon={{paytm_image}}
      >

      </Button>
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})