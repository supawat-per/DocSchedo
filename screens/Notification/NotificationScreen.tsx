import React from 'react';
import { Dimensions, Image, View, StyleSheet, Text, ScrollView, Button, TouchableOpacity} from 'react-native';

export default class NotificationScreen extends React.Component {

  _onPressButton = () => {

  }

  render() {
    return (
      <View style = {{ flex: 1 }}>
        <View style={styles.container}>
          <View style ={[ styles.favoritebar, { borderBottomWidth: 0 } ]}> 
            <TouchableOpacity onPress={this._onPressButton} style={styles.favoritebutton}>
              <View style={styles.favoritecontent}>
                <Image source={require('../Image/Notification/Notification_Medication.png')} style ={ styles.favoriteimage } /> 
                <Text style={styles.favorite_text}>Medication</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton} style={styles.favoritebutton}>
              <View style={styles.favoritecontent}>
                <Image source={require('../Image/Notification/Notification_Appointment.png')} style ={ styles.favoriteimage } /> 
                <Text style={styles.favorite_text}>My Appointment</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton} style={styles.favoritebutton}>
              <View style={styles.favoritecontent}>
                <Image source={require('../Image/Notification/Notification_Calendar.png')} style ={ styles.favoriteimage } /> 
                <Text style={styles.favorite_text}>Calendar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View> 
        <ScrollView>
          <View>
            
          </View>
        </ScrollView>
      </View>  
    );
  }
}

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
  container:{
    backgroundColor: "pink",
    height: 120,
  },
  favoritebar: {
    flex: 3,
    alignContent: 'stretch',
    height: 180,
    flexDirection: 'row',
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "white",
  },
  favoritebutton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: "#E3EDF6",
    borderWidth: 3,
    borderColor: "white",
  },
  favoritecontent: {
    flex: 9,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteimage: {
    flex: 6,
    resizeMode: 'contain',
  },
  favorite_text: {
    flex: 3,
    fontSize: 18,
    color: "#345799"
  }
});