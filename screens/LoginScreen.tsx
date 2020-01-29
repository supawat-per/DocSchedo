import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  ImageBackground,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  AsyncStorage
} from 'react-native';
import FirebaseConnection from './Firebase/FirebaseConnection'
import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';

export default class LoginScreen extends React.Component{

  state = {
    id: '',
    fullname: '',
    firstname: '',
    lastname: '',
    dateofbirth: "",
    gender:'',

    date: new Date(),

    address: '',
    phone: '',
    emergency_name: '',
    emergency_phone: '',
    show: false,

    email: '',
    password: '',
    repassword: '',
    success: false,
    modalA_Visible: true,
    modalB_Visible: false,
    modalC_Visible: false,
  }

  backbutton = () => {
    this.props.navigation.navigate('Landing');
  }

  handleLogin = () => {
    const { email, password } = this.state

    FirebaseConnection.auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Home'))
        .catch(error => {
          // Handle Errors here.
          this.setState({success : false});
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == 'auth/user-not-found') {
            alert('Wrong email or password.'); 
          } else if (errorCode == 'auth/user-disabled'){
            alert('Your account has been disabled');
          } else if (errorCode == 'auth/wrong-password'){
            alert('Wrong email or password.');
          } else if (errorCode == 'auth/invalid-email'){
            alert('Your email address is not valid.');
          } else {
            alert(errorMessage);
          }
        });
  }

  handle_facebook = async () => {
    await Facebook.initializeAsync("3284826128200759","DocSchedo");
    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['email'],
    });
    if (type === 'success') {
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email`);
      const data = (await response.json());
      const fullname = data.name.split(" ");
      await this.setState({firstname : fullname[0]
                    ,lastname : fullname[1]
                    ,email: data.email});
      const user = await FirebaseConnection.auth()
          .fetchSignInMethodsForEmail(this.state.email);
      var message = "";
      if(user.length > 0){
        this.props.navigation.navigate('Home');
      }else{
        this.props.navigation.navigate('Register',
                                      {email: this.state.email
                                      ,firstname: this.state.firstname
                                      ,lastname: this.state.lastname})
      }
    } 
    
  }
  handle_google = async () => {
    
    const { type, accessToken, user } = await Google.logInAsync({
      expoClientId:"592948947888-olb00plfvmrhugcgmrqjqo36fngnamaa.apps.googleusercontent.com"
    });
    
    if (type === 'success') {
      /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
      console.log(user);
    }


  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <ImageBackground  source={require('./Image/Home/Background_02.jpg')} style={styles.background_container}>
        <View style={styles.logocontainer}>
          <View style={styles.logobackground}>
            <Image style={styles.logo} source={require('./Image/Home/Logo_01.png')}/>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.titletext}> LOGIN </Text>
          <View style={styles.inputcontainer}>
            <TextInput
              style={styles.inputBox}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              placeholder='Email'
              autoCapitalize='none'
            />
            
            <TextInput
              style ={[ styles.inputBox, { marginBottom: 30 } ]}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              placeholder='Password'
              secureTextEntry={true}
            />
          </View>
          <View style={{flexDirection: 'row', width: 400}}>
            <TouchableOpacity style ={[ styles.buttonA, { flex: 1, marginRight: 0 } ]} onPress={this.backbutton}>
              <Text style={styles.buttonText}>BACK</Text>
            </TouchableOpacity>
            <TouchableOpacity style ={[ styles.buttonB, { flex: 2 } ]} onPress={this.handleLogin}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View style ={styles.authencontainer}>
            <TouchableOpacity style ={[ styles.button_Google, { marginRight: 2.5 } ]} onPress={this.handle_google}>
              <Text style={{color: 'white'}}>
                Login with GMail 
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style ={[ styles.button_Facebook, { marginLeft: 2.5 } ]} onPress={this.handle_facebook}>
              <Text style={{color: 'white'}}>
                Login with Facebook
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
            <Text style ={[ styles.additional_text, { marginTop: 7 } ]}>Don't have an account yet? Sign up</Text>
          </TouchableOpacity>
        </View> 
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  logocontainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-end', 
    marginBottom: 10,       
  },
  logobackground:{
    backgroundColor: 'rgba(0, 40, 100, 0.2)',
    height: 250,
    width: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  logo: {
    height: 200,
    aspectRatio: 2.06/1
  },
  container: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  background_container: {
    flex: 8,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  additional_text:{
    color: 'white',
    fontSize: 18,
  },
  inputcontainer: {
    borderRadius: 15,
    alignItems: 'center',
    height:  180,
    width: 400,
    
    backgroundColor: 'rgba(0, 40, 100, 0.2)',
    justifyContent: 'center',
  },
  authencontainer: {
    alignItems: 'center',
    margin: -3,
    width: 400,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titletext:{
    fontSize: 35,
    color: 'white',
    padding: 5
  },
  inputBox: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 20,
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    textAlign: 'center',
    color: 'white',
  },
  buttonA: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 5,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    height: 50,
  },
  buttonB: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 5,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7FB4FE',
    borderColor: '#7FB4FE',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    height: 50,
  },
  button_Google: {
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 5,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D44638',
    borderColor: '#D44638',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    height: 50,
    flex: 1
  },
  button_Facebook: {
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 5,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3b5998',
    borderColor: '#3b5998',
    color: 'white',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    height: 50,
    flex: 1
  },
  buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff'
  },
  buttonSignup: {
      fontSize: 12
  }
})