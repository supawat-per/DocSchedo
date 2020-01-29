 import React from 'react';
import { Button, Modal, Image, ImageBackground, View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import FirebaseConnection from './Firebase/FirebaseConnection';
import DropdownMenu from 'react-native-dropdown-menu';
import DateTimePicker from '@react-native-community/datetimepicker';
import ModalDropdown from 'react-native-modal-dropdown';
import { TabRouter } from 'react-navigation';

export default class RegisterScreen extends React.Component {

  constructor(props) {
    super(props)
    
    if(props.navigation.state.params){
      this.state = {
        id: '',
        email: props.navigation.state.params.email,
        firstname: props.navigation.state.params.firstname,
        lastname: props.navigation.state.params.lastname,
        dateofbirth: "",
        gender:'',
        date: new Date(),
        address: '',
        phone: '',
        emergency_name: '',
        emergency_phone: '',
        show: false,
        password: '',
        repassword: '',
        success: false,
        modalA_Visible: true,
        modalB_Visible: false,
        modalC_Visible: false,
      }
    }else{
      this.state = {
        id: '',
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
      };
    }

}
  
  state = {
    id: '',
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

  setDate  = (event, date) => {
    date = date || this.state.date;
    
    this.setState({
      show: Platform.OS === 'ios' ? true: false,
      date,
    })
    var temp = this.getdateofbirth();
    this.setState({
      dateofbirth: temp,
    })
  }
  
  check_id() {
    const { id } = this.state;
    var success = true;
    if(id.length == 13){
      success = true;
    }else{
      alert("Your Identification number is invalid");
      success = false;
    }
    return success;
  }
  
  check_A(){
    const { firstname, lastname, gender, dateofbirth } = this.state;
    var success = true;
    if(firstname.length > 0 ){
      if(lastname.length > 0 ){
        if(dateofbirth.length > 0 ){
          if(gender.length > 0 ){
          }else{
            success = false;
            alert("Please select your Gender");
          }
        }else{
          success = false;
          alert("Please select your Date of Birth");
        }
      }else{
        success = false;
        alert("Please enter your Last Name");
      }
    }else{
      success = false;
      alert("Please enter your First Name");
    }
    return success;
  }
  
  check_B(){
    const { address, phone, emergency_name, emergency_phone } = this.state;
    var success = true;
    if(address.length > 0){
      if(phone.length == 10){
        if(emergency_name.length > 0){
          if(emergency_phone.length == 10){
          }else{
            success = false;
            alert("Your Emergency Phone Number is invalid");
          }
        }else{
          success = false;
          alert("Please enter your Emergency Contact Name");
        }
      }else{
        success = false;
        alert("Your phone number is invalid");
      }
    }else{
      success = false;
      alert("Please enter your Adress");
    }
    return success;
  }

  check_C(){
    const { email, password, repassword } = this.state;
    if(email.length > 0){
      if(password.length > 0)
      {
        if(password == repassword){
          this.handleSignUp();
        }else{
          alert("Please confirm your Password");
        }
      }else{
        alert("Please enter your Password");
      }
    }else{
      alert("Please enter Email Address");
    }
    
  }

  handleSignUp = () => {
    const { email, password } = this.state;
    FirebaseConnection.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(()=>{
      FirebaseConnection.database().ref('Account')
      .once('value')
      .then(function(snapshot) {
        var id = "P_";
        var num = snapshot.numChildren();
        num  += 1;
        id += num;

        FirebaseConnection.database().ref('Account/' + id).set({
          id: id,
          email: email,
          password: password
        });

        FirebaseConnection.database().ref('User/Profile/' + id).set({
            id: id
        });

        alert("Congratulations!! your registration was successful");
      });
    })
    .catch(error => {
      // Handle Errors here.
      this.setState({success : false});
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.'); 
      } else if (errorCode == 'auth/email-already-in-use'){
        alert('Your email address already exists.');
      } else if (errorCode == 'auth/invalid-email'){
        alert('Your email address is not valid.');
      } else {
        alert(errorMessage);
      }
    });
  }

  toggleModalA = () => {
    this.setState({ modalA_Visible: !this.state.modalA_Visible });
  };

  toggleModalB = () => {
    this.setState({ modalB_Visible: !this.state.modalB_Visible });
  };

  toggleModalC = () => {
    this.setState({ modalC_Visible: !this.state.modalC_Visible });
  };

  nextfromA = () => {
    if(this.check_id() && this.check_A()){
      this.toggleModalA();
      this.toggleModalB();
    }
  };

  backfromA = () => {
    this.toggleModalA();
    this.backbutton();
  };

  nextfromB = () => {
    if(this.check_B())
    {
      this.toggleModalB();
      this.toggleModalC();
    }
  };

  backfromB = () => {
    this.toggleModalB();
    this.toggleModalA();
  };

  nextfromC = () => {
    this.check_C();
  };

  backfromC = () => {
    this.toggleModalC();
    this.toggleModalB();
  };

  exitfromA = () => {
    this.toggleModalA();
    this.props.navigation.navigate('Login');
  };

  exitfromB = () => {
    this.toggleModalB();
    this.props.navigation.navigate('Login');
  };

  exitfromC = () => {
    this.toggleModalC();
    this.props.navigation.navigate('Login');
  };

  datepicker = () => {
    this.show('date');
  }

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  }

  getdateofbirth(){
    var day = this.state.date.getDate();
    var month = this.state.date.getMonth()+1;
    var year = this.state.date.getFullYear();
    var temp = new Date();
    var result;
    if(temp.getDate() == day && temp.getMonth()+1 == month && temp.getFullYear() == year){
      result = "Date of Birth";
    }else{
      result = day + " / " + month + " / " + year;
    }
    return result;
  }

  render() {
    const { show, date } = this.state;
    var gender = [["Male" , "Female" , "Other"]];
    
    return (
      <ImageBackground  source={require('./Image/Home/Background_02.jpg')} style={styles.background_container}>
        <View style={styles.logocontainer}>
          <View style={styles.logobackground}>
            <Image style={styles.logo} source={require('./Image/Home/Logo_01.png')}/>
          </View>
        </View>
        <View style={styles.container}>
          
          <Modal
          animationType="fade"
          visible={this.state.modalA_Visible}
          transparent={true}
          onRequestClose={this.backfromA}
          >
            <View style={styles.containerA}>
              <Text style={styles.titletext}> REGISTER </Text>
              <View style={styles.inputcontainerA}>
                <TextInput
                  style={styles.inputBox}
                  value={this.state.id}
                  onChangeText={id => this.setState({ id })}
                  placeholder='Identification Number'
                  autoCapitalize='none'
                />
                <TextInput
                  style={styles.inputBox}
                  value={this.state.firstname}
                  onChangeText={firstname => this.setState({ firstname })}
                  placeholder='Firstname'
                  autoCapitalize='none'
                />
                <TextInput
                  style={styles.inputBox}
                  value={this.state.lastname}
                  onChangeText={lastname => this.setState({ lastname })}
                  placeholder='Lastname'
                  autoCapitalize='none'
                  />
                  
                <TouchableOpacity style={styles.inputBox} onPress={this.datepicker} > 
                  <Text style={{fontSize: 20, color: 'white'}}>
                    {this.getdateofbirth()}
                  </Text>
                  { show && <DateTimePicker value={date}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={this.setDate} />
                  }
                </TouchableOpacity>
                
                <View style={styles.inputBox}>
                  <ModalDropdown 
                    style={{alignItems:'center'}}
                    options={['Male', 'Female', 'Other']}
                    defaultValue= "Gender"
                    textStyle={{color: 'white', fontSize: 20}}
                    dropdownStyle={{alignItems: 'center', alignSelf: 'center', width: 200, position: 'absolute'}}
                    dropdownTextStyle={{fontSize: 18}}
                    onSelect={(idx, value) => this.setState({gender: value})}
                  />
                </View>
                <Image style ={[ styles.progressbar, { marginBottom: 5 } ]} source={require('./Image/Register/Bar_01.png')}/>
              </View>
              <View style={{flexDirection: 'row', width: 400}}>
                <TouchableOpacity style ={[ styles.buttonA, { flex: 1, marginRight: 0 } ]} onPress={this.backfromA}>
                  <Text style={styles.buttonText}>BACK</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={[ styles.buttonB, { flex: 2 } ]} onPress={this.nextfromA}>
                  <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              </View>
              
              <TouchableOpacity onPress={this.exitfromA}>
                <Text style ={[ styles.additional_text, { marginTop: 5 } ]}>Already have an account? Sign In</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Modal
          animationType="fade"
          visible={this.state.modalB_Visible}
          transparent={true}
          onRequestClose={this.backfromB}
          >
            <View style={styles.containerB}>
              <Text style={styles.titletext}> REGISTER </Text>
              <View style={styles.inputcontainerB}>
                <TextInput
                  style={styles.inputBox}
                  value={this.state.address}
                  onChangeText={address => this.setState({ address })}
                  placeholder='Address'
                  autoCapitalize='none'
                />
                <TextInput
                  style={styles.inputBox}
                  value={this.state.phone}
                  onChangeText={phone => this.setState({ phone })}
                  placeholder='Phone'
                  autoCapitalize='none'
                />
                <TextInput
                  style={styles.inputBox}
                  value={this.state.emergency_name}
                  onChangeText={emergency_name => this.setState({ emergency_name })}
                  placeholder='Emergency Contact Name'
                  autoCapitalize='none'
                />
                <TextInput
                  style ={[ styles.inputBox, { marginBottom: 10 } ]}
                  value={this.state.emergency_phone}
                  onChangeText={emergency_phone => this.setState({ emergency_phone })}
                  placeholder='Emergency Contact Phone'
                  secureTextEntry={true}
                />
                <Image style ={[ styles.progressbar, { marginBottom: 5 } ]} source={require('./Image/Register/Bar_02.png')}/>
              </View>
              <View style={{flexDirection: 'row', width: 400}}>
                <TouchableOpacity style ={[ styles.buttonA, { flex: 1, marginRight: 0 } ]} onPress={this.backfromB}>
                  <Text style={styles.buttonText}>BACK</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={[ styles.buttonB, { flex: 2 } ]} onPress={this.nextfromB}>
                  <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              </View>
            
              <TouchableOpacity onPress={this.exitfromB}>
                <Text style ={[ styles.additional_text, { marginTop: 5 } ]}>Already have an account? Sign In</Text>
              </TouchableOpacity> 
            </View>  
          </Modal>

          <Modal
          animationType="fade"
          visible={this.state.modalC_Visible}
          transparent={true}
          onRequestClose={this.backfromC}
          >
            <View style={styles.containerC}>
              <Text style={styles.titletext}> REGISTER </Text>
              <View style ={[ styles.inputcontainer, { height:  250 } ]}>
                <TextInput
                  style={styles.inputBox}
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                  placeholder='Email'
                  autoCapitalize='none'
                />
                <TextInput
                  style ={[ styles.inputBox, { marginBottom: 10 } ]}
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                  placeholder='Password'
                  secureTextEntry={true}
                />
                <TextInput
                  style ={[ styles.inputBox, { marginBottom: 10 } ]}
                  value={this.state.repassword}
                  onChangeText={repassword => this.setState({ repassword })}
                  placeholder='Confirm Password'
                  secureTextEntry={true}
                />
                <Image style ={[ styles.progressbar, { marginBottom: 5 } ]} source={require('./Image/Register/Bar_03.png')}/>
              </View>
              <View style={{flexDirection: 'row', width: 400}}>
                <TouchableOpacity style ={[ styles.buttonA, { flex: 1, marginRight: 0 } ]} onPress={this.backfromC}>
                  <Text style={styles.buttonText}>BACK</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={[ styles.buttonB, { flex: 2 } ]} onPress={this.nextfromC}>
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
              </View>
            
              <TouchableOpacity onPress={this.exitfromC}>
                <Text style ={[ styles.additional_text, { marginTop: 5 } ]}>Already have an account? Sign In</Text>
              </TouchableOpacity> 
      
            </View>
          </Modal>
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
  progressbar:{
    height: 50,
    aspectRatio: 7.311/1
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
    justifyContent: 'center',
    marginTop: 30,
  },
  containerA: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 230,
  },
  containerB: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 170,
  },
  containerC: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
  },
  titletext:{
    fontSize: 35,
    color: 'white',
    padding: 5
  },
  inputBox: {
    width: '85%',
    margin: 5,
    padding: 10,
    fontSize: 20,
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  inputcontainer: {
    borderRadius: 15,
    alignItems: 'center',
    height:  190,
    width: 400,
    backgroundColor: 'rgba(0, 40, 100, 0.2)',
    justifyContent: 'center',
  },
  inputcontainerA: {
    borderRadius: 15,
    alignItems: 'center',
    height:  360,
    width: 400,
    backgroundColor: 'rgba(0, 40, 100, 0.2)',
    justifyContent: 'center',
  },
  inputcontainerB: {
    borderRadius: 15,
    alignItems: 'center',
    height:  300,
    width: 400,
    backgroundColor: 'rgba(0, 40, 100, 0.2)',
    justifyContent: 'center',
  },
  background_container: {
    flex: 8,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  button: {
      marginTop: 30,
      marginBottom: 20,
      paddingVertical: 5,
      alignItems: 'center',
      backgroundColor: '#FFA611',
      borderColor: '#FFA611',
      borderWidth: 1,
      borderRadius: 5,
      width: 200
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
  buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff'
  },
  buttonSignup: {
      fontSize: 12
  },
  additional_text:{
    color: 'white',
    fontSize: 18,
  },
})