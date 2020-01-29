import React from 'react';
import { ImageBackground, Image, View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';

export default class LandingScreen extends React.Component{

  login = () => {
    this.props.navigation.navigate('Login');
  }

  register = () => {
    this.props.navigation.navigate('Register');
  }

  render() {
    return (
      <ImageBackground source={require('./Image/Home/Background_01.jpg')} style={styles.backgroundImage}>
          <View style={styles.logocontainer}>
            <Image style={styles.logo} source={require('./Image/Home/Logo_01.png')}/>
          </View>
          
          <View style={styles.footer}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1, height: 70, backgroundColor: '#FFFFFF'}}>
                <TouchableOpacity style={styles.button_login}  onPress={this.login}>
                  <Text style={{color: '#7FB4FE', fontWeight: 'bold'}}> LOGIN </Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, height: 70, backgroundColor: '#FFFFFF'}}>
                <TouchableOpacity style={styles.button_register} onPress={this.register}>
                  <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}> REGISTER </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 1}}>
              <View style={{flex: 1, height: 70, backgroundColor: '#FFFFFF'}}>
                <Text style={{textAlign: 'center', color: '#7FB4FE', fontWeight: 'bold'}}> Language </Text>
                <View style={{flex: 1, flexDirection: 'row', paddingTop: 3}}>
                  <View style={{flex: 5}}>
                    
                    <Text style={{textAlign: 'right', paddingRight: 4, fontSize: 16, color: '#7FB4FE', fontWeight: 'bold'}}> ภาษาไทย </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: '#7FB4FE', fontWeight: 'bold'}}> | </Text>
                  </View>
                  <View style={{flex: 5}}>
                    <Text style={{textAlign: 'left', paddingLeft: 4, fontSize: 16, color: '#7FB4FE', fontWeight: 'bold'}}> English </Text>  
                  </View>
                </View>
              </View>
            </View>
          </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  logocontainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  logo: {
    height: 220,
    aspectRatio: 2.06/1
  },
  footer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF'
  },
  button_login:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderColor: '#7FB4FE',
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 5,
    marginVertical: 10
  },
  button_register:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7FB4FE',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 10,
    marginVertical: 10
  },
  backgroundImage:{
    width: '100%', 
    height: '100%',
    flex: 1,
    backgroundColor: 'black'
  }
});