import React from 'react';
import { SafeAreaView, Dimensions, Image, View, StyleSheet, Text, ScrollView, Button, TouchableOpacity} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Colors';
import FirebaseConnection from '../Firebase/FirebaseConnection';

export default class HomeScreen extends React.Component {

  _onPressButton = () => {

  }

  render() {
    return (
      <SafeAreaView style ={ styles.main_container } >
        <ScrollView style ={ styles.scroll }>
          <View style ={ styles.welcomebar }>
            <View style ={ styles.welcomepic_container }>
              <Image source={require('../Image/Profile/girl.png')} style={ styles.welcomepic } /> 
            </View>
            <View style = { styles.welcometextbox }>
              <Text style = { styles.welcometext }> Hello, </Text>
              <Text style = { styles.welcometext }> Jennifer Lawrence 2 </Text>
            </View>
          </View>

          <View >
            <View style ={[ styles.favoritebar, { borderTopWidth: 0 , borderBottomWidth: 0 } ]}> 
              <TouchableOpacity onPress={this._onPressButton} style={styles.favoritebutton}>
                <View style={styles.favoritecontent}>
                <Image source={require('../Image/Shortcut/Shortcut_Doctor.png')} style ={ styles.favoriteimage } /> 
                <Text style={styles.favorite_text}>Find Doctor</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton} style ={[ styles.favoritebutton,]}>
                <View style={styles.favoritecontent}>
                <Image source={require('../Image/Shortcut/Shortcut_Appointment.png')} style ={ styles.favoriteimage } /> 
                <Text style={styles.favorite_text}>My Appointment</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton} style={styles.favoritebutton}>
                <View style={styles.favoritecontent}>
                <Image source={require('../Image/Shortcut/Shortcut_Switch.png')} style ={ styles.favoriteimage } /> 
                <Text style={styles.favorite_text}>Switch User</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style ={[ styles.favoritebar, { borderTopWidth: 0 } ]}>
              <TouchableOpacity onPress={this._onPressButton} style={styles.favoritebutton}>
                <View style={styles.favoritecontent}>
                <Image source={require('../Image/Shortcut/Shortcut_Emergency.png')} style ={ styles.favoriteimage } /> 
                <Text style={styles.favorite_text}>Emergency Call</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton} style={styles.favoritebutton}>
                <View style={styles.favoritecontent}>
                <Image source={require('../Image/Shortcut/Shortcut_Hospital.png')} style ={ styles.favoriteimage } /> 
                <Text style={styles.favorite_text}>Find Hospital</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton} style={styles.favoritebutton}>
                <View style={styles.favoritecontent}>
                <Image source={require('../Image/Shortcut/Shortcut_ADD.png')} style ={ styles.favoriteimage } /> 
                <Text style={styles.favorite_text}>Add Favorite</Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <View style ={[ styles.healthpackage_container , { borderTopWidth: 0 } ]}>
                <Image source={require('../Image/HealthPackage/PACKAGE_1_EN.jpg')} style ={ styles.healthpackage_image } />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style ={ styles.healthpackage_container }>
                <Image source={require('../Image/HealthPackage/PACKAGE_2_EN.jpg')} style ={ styles.healthpackage_image } />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style ={ styles.healthpackage_container }>
                <Image source={require('../Image/HealthPackage/PACKAGE_3_EN.jpg')} style ={ styles.healthpackage_image } />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style ={ styles.healthpackage_container }>
                <Image source={require('../Image/HealthPackage/PACKAGE_4_EN.jpg')} style ={ styles.healthpackage_image } />
              </View>
            </TouchableOpacity>

          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

const {width, height} = Dimensions.get("window");
const favorite_text_size = RFValue(18,850);
const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  welcomebar: {
    flex: 4,
    flexDirection: 'row',
    height: 90,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  welcomepic_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomepic: {
    width: 70, 
    height: 70,
    borderRadius: 70/ 2, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3EDF6',
  },
  welcometext: {
    fontSize: 20,
    color: "#345799"
  },
  welcometextbox: {
    flex: 3,
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
    backgroundColor: 'white',
  },
  favoritebar: {
    flex: 3,
    alignContent: 'stretch',
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
    aspectRatio: 1
  },
  favoritecontent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    
    justifyContent: 'center',
  },
  favoriteimage: {
    flex: 0.8,
    resizeMode: 'contain',
    alignSelf: 'center',
    width: width/3,
    height: width/3
  },
  favorite_text: {
    flex: 0.2,
    fontSize: favorite_text_size,
    color: "#345799",
    textAlign: 'center',
    alignSelf: 'center'
  },
  healthpackage_container: {
    flex: 1,
    maxWidth: width,
    aspectRatio: 2.18/1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "white",
  },
  healthpackage_image: {
    flex: 1,
    resizeMode: 'contain',
  }
});