import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native'
import {Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Input, } from 'react-native-elements';


function SearchScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Card containerStyle={{
        height: '60%',
        width: '100%',
      }}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableWithoutFeedback>

        <Input
        placeholder='Pickup-Address'
        />

        <Input
        placeholder='Drop-Address'
        />

        <TouchableOpacity onPress={() => navigation.navigate('BookingScreen')} activeOpacity={0.6} style={{
          height: 50,
          width: 200,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 23}}>
            Search for Cabs
          </Text>
        </TouchableOpacity>
      </Card>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  }
})
