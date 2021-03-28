import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapScreen from './src/MapScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SearchScreen from './src/SearchScreen';
import BookingScreen from './src/BookingScreen';
import PaymentScreen from './src/PaymentScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MapScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Location-Search" component={SearchScreen} options={{headerShown: false}}/>
          <Stack.Screen name="BookingScreen" component={BookingScreen} options={{headerShown: false}}/>
          <Stack.Screen name="PaymentGateway" component={PaymentScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
