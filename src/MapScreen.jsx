import React from 'react'
import { View, StyleSheet, Dimensions, Text, Platform, TouchableOpacity } from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/core';

const {width, height} = Dimensions.get('window')

const LATITUDE = 9.061460;
const LONGITUDE = 7.500640;
const LATITUDE_DELTA = 0.09922;
const LONGITUDE_DELTA = 0.09421;




class MapScreen extends React.Component {

  state = {
    latitude: LATITUDE,
    longitude: LONGITUDE,

    error: null,

    menuVisible: false,
  }

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });

  closeMenu = () => {
    this.setState({menuVisible: false})
  }

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal({
      initialQuery: 'vestar', 
      locationRestriction: {
          latitudeSW: 6.3670553, 
          longitudeSW: 2.7062895, 
          latitudeNE: 6.6967964, 
          longitudeNE: 4.351055
      },
      country: 'NG',
      type: 'establishment'
  }, ['placeID', 'location', 'name', 'address', 'types', 'openingHours', 'plusCode', 'rating', 'userRatingsTotal', 'viewport']
)
.then((place) => {
  console.log(place);
})
.catch(error => console.log(error.message));// error is a Javascript Error object
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      this.setState({
        latitude: position.coords.latitude,

        longitude: position.coords.longitude,

        error: null, 
      });

    }, error => this.setState({ error: error.message}))
  }

  signout = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate('AuthLoading');
  }


  render() {
    
    const {navigation} = this.props;
    return (
      
      <View style={styles.mainViewStyle}>
        <View style={styles.mapcontainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          followsUserLocation={true}
          loadingEnabled={true}
          showsMyLocationButton={true}
          style={{
            height: '80%',
            width: '100%',
            marginTop: -80,
          }}
          region={this.getMapRegion()}
          onMapReady={() => this.setState({ marginBottom: 1,})}>

          </MapView>

          <View style={{
            width: '100%',
            height: '20%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Location-Search')}} activeOpacity={0.6} style={{ height: 50, width: 300, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e6e7e8'}}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 25,
              }}>
                Search destination
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    backgroundColor: 'white',
  },

  mapcontainer: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  coverViewStyle: {
    flex: 1.5,
    alignItems: 'center',
  },

  textStyle: {
    flex: 9,
    fontSize: 14,
    color: 'white',
    fontWeight: '400',
  },

  textIconStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentStyle: {
    justifyContent: 'center',
    flex: 1,
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },

  iconsViewStyle: {
    flex: 9.5,
    justifyContent: 'space-between',
  },

  myViewStyle: {
    flex: 1.5,
    flexDirection: 'row',
    borderTopWidth: 0,
    alignItems: 'center',
    backgroundColor: 'grey',
    paddingEnd: 20,
  },

  searchClickStyle: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default function(props) {
  const navigation = useNavigation();

  return <MapScreen {...props} navigation={navigation}/>
}