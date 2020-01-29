import React from 'react';
import { TouchableWithoutFeedback, SafeAreaView, Dimensions, Modal, AsyncStorage, View, Image, Text, ScrollView, Button, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class ProfileScreen extends React.Component {
  
  state = {
    modal_More_Visible: false,
    modal_Edit_Visible: false,
    modal_Switch_Visible: false,
    modal_Medical_History_Visible: false,
    modal_Medical_Document_Visible: false,
    modal_Appointment_Visible: false,
    modal_Self_Screening_Visible: false,
    modal_Health_Package_Visible: false,
    modal_Setting_Visible: false,
  }

  toggle_modal_More = () => {
    this.setState({ modal_More_Visible: !this.state.modal_More_Visible });
  };

  toggle_modal_Edit = () => {
    this.setState({ modal_Edit_Visible: !this.state.modal_Edit_Visible });
  };

  toggle_modal_Switch = () => {
    this.setState({ modal_Switch_Visible: !this.state.modal_Switch_Visible });
  };

  toggle_modal_Medical_History = () => {
    this.setState({ modal_Medical_History_Visible: !this.state.modal_Medical_History_Visible });
  };

  toggle_modal_Medical_Document = () => {
    this.setState({ modal_Medical_Document_Visible: !this.state.modal_Medical_Document_Visible });
  };

  toggle_modal_Appointment = () => {
    this.setState({ modal_Appointment_Visible: !this.state.modal_Appointment_Visible });
  };

  toggle_modal_Self_Screening = () => {
    this.setState({ modal_Self_Screening_Visible: !this.state.modal_Self_Screening_Visible });
  };

  toggle_modal_Health_Package = () => {
    this.setState({ modal_Health_Package_Visible: !this.state.modal_Health_Package_Visible });
  };

  toggle_modal_Setting_Visible = () => {
    this.setState({ modal_Setting_Visible: !this.state.modal_Setting_Visible });
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  _onPress_More = async () => {
    
  };

  _onPress_Edit = async () => {
    
  };

  _onPress_Switch = async () => {
    
  };

  _onPress_Medical_History = async () => {
    
  };

  _onPress_Medical_Document = async () => {
    
  };

  _onPress_Appointment = async () => {
    
  };

  _onPress_Self_Screening = async () => {
    
  };

  _onPress_Health_Package = async () => {
    
  };

  _onPress_Setting = async () => {
    
  };

  render() {
    return(
      <SafeAreaView style ={ styles.main_container } >
        <View style ={ styles.welcomebar }>
            <View style ={ styles.welcomepic_container }>
              <Image source={require('../Image/Profile/girl.png')} style={ styles.welcomepic } /> 
            </View>
            <View style = { styles.welcometext_container }>
              <Text style = { styles.welcometext_title }> Personal Profile </Text>
              <Text style = { styles.welcometext_enName }> Jennifer Lawrence </Text>
              <Text style = { styles.welcometext_thName }> เจนิเฟอร์ ลอเลนซ์ </Text>
              <View style = { styles.welcomtext_more_container}>
                <View style = {styles.welcometext_Phone_container}>
                  <Text style = { styles.welcometext_Phone }> 0915768842 </Text>
                </View>
                <TouchableOpacity onPress={this.toggle_modal_More} style={styles.button_more}>
                  <Text style = { styles.button_more_text }> MORE </Text>
                </TouchableOpacity>
              </View>     
            </View>
            <View style = {styles.welcomeoption_container}>
              <View style = {styles.welcomeoption_button_container}>
                <TouchableOpacity onPress={this.toggle_modal_More} style ={[ styles.welcomeoption_button, { marginTop: 5 }]}>
                  <View style = {styles.welcomeoption_button_content}>
                    <Image source={require('../Image/Profile/Edit.png')} style = { styles.welcomeoption_button_image } />
                    <Text style = {styles.welcomeoption_button_text}> Edit </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style = {styles.welcomeoption_button_container}>
                <TouchableOpacity onPress={this._onPress_Switch} style ={[ styles.welcomeoption_button, { marginBottom: 5 }]}>
                  <View style = {styles.welcomeoption_button_content}>
                    <Image source={require('../Image/Profile/Switch.png')} style = { styles.welcomeoption_button_image } />
                    <Text style = {styles.welcomeoption_button_text}> Switch </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
        </View>
        <ScrollView style ={ styles.scroll } >
          <View style ={[ styles.button_main_bar, { borderBottomWidth: 0 } ]}>
            <TouchableOpacity onPress={this._onPress_Medical_History} style={styles.button_main}>
              <View style={styles.button_main_container}>
                <Image source={require('../Image/Profile/Medical_History.png')} style ={ styles.button_main_image_newline } />
                <View style={styles.button_main_text_container_newline}>
                  <Text style={styles.button_main_text_newline}> Medical{'\n'}History</Text>
                </View> 
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPress_Medical_Document} style={styles.button_main}>
              <View style={styles.button_main_container}>
                <Image source={require('../Image/Profile/Medical_Document.png')} style ={ styles.button_main_image_newline } /> 
                <View style={styles.button_main_text_container_newline}>
                  <Text style={styles.button_main_text_newline}> Medical{'\n'}Document</Text>
                </View> 
              </View>
            </TouchableOpacity>
          </View>
          <View style ={[ styles.button_main_bar, { borderTopWidth: 0, borderBottomWidth: 0 } ]}>
            <TouchableOpacity onPress={this._onPress_Medical_History} style={styles.button_main}>
              <View style={styles.button_main_container}>
                <Image source={require('../Image/Profile/Appointment.png')} style ={ styles.button_main_image } />
                <View style={styles.button_main_text_container}>
                  <Text style={styles.button_main_text}> My Appointment </Text>
                </View> 
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPress_Medical_History} style={styles.button_main}>
              <View style={styles.button_main_container}>
                <Image source={require('../Image/Profile/Self-Screening.png')} style ={ styles.button_main_image } /> 
                <View style={styles.button_main_text_container}>
                  <Text style={styles.button_main_text}> Self-Screening </Text>
                </View> 
              </View>
            </TouchableOpacity>
          </View>
          <View style ={[ styles.button_main_bar, { borderTopWidth: 0 } ]}>
            <TouchableOpacity onPress={this._onPress_Medical_History} style={styles.button_main}>
              <View style={styles.button_main_container}>
                <Image source={require('../Image/Profile/Health_Package.png')} style ={ styles.button_main_image } /> 
                <View style={styles.button_main_text_container}>
                  <Text style={styles.button_main_text}> Health Package </Text>
                </View> 
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPress_Medical_History} style={styles.button_main}>
              <View style={styles.button_main_container}>
                <Image source={require('../Image/Profile/Setting.png')} style ={ styles.button_main_image } /> 
                <View style={styles.button_main_text_container}>
                  <Text style={styles.button_main_text}> Setting </Text>
                </View> 
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        
        <Modal animationType="fade" visible={this.state.modal_More_Visible} transparent={true} onRequestClose={this.toggle_modal_More}>
          <View style = {modal_styles.modal_container}>
            <View style = {modal_styles.appointment_container}>
              <View style = {modal_styles.modal_title_container}>
                <Text style = {modal_styles.modal_title_text}> Appointment </Text>
              </View>
                
              <Button title="CLOSE" onPress={this.toggle_modal_More}></Button>
            </View>
          </View>
        </Modal>

      </SafeAreaView>
    );
  }
}

const {width, height} = Dimensions.get("window");

const modal_styles = StyleSheet.create({
  modal_container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(13, 69, 119, 0.8)'
  },
  modal_title_container: {
    backgroundColor: "#E3EDF6",
  },
  modal_title_text: {

  },
  appointment_container: {
    height: RFValue(600,900),
    width: RFValue(350,900),
    backgroundColor: "pink",
    alignSelf: "center",
    borderWidth: 3,
    borderColor: "#345799",
  }
})

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#E3EDF6",
  },
  scroll: {
    flex: 0.75,
    backgroundColor: '#E3EDF6',
  },
  welcomebar: {
    marginHorizontal: 5,
    flexDirection: 'row',
    height: RFValue(140,900),
    justifyContent: 'center',
    backgroundColor: "#E3EDF6",
  },
  welcomepic_container: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcometext_container: {
    flex: 0.65,
    justifyContent: 'center',
  },
  welcomeoption_container: {
    flex: 0.15,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  welcomeoption_button_container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'flex-end'
  },
  welcomeoption_button: {
    width: RFValue(60,900),
    height: RFValue(60,900),
    backgroundColor: "white",
    alignContent: 'center',
    alignSelf: 'flex-end',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#A9D0FF",
    marginRight: 10,
    borderRadius: 7,
  },
  welcomeoption_button_content: {
    alignItems: 'center'
  },
  welcomeoption_button_image: {
    width: RFValue(38,900),
    height: RFValue(38,900),
    resizeMode: 'contain',
    marginTop: 3,
    alignSelf: 'center',
  },
  welcomeoption_button_text: {
    fontSize: RFValue(14,900),
    marginTop: -2,
    color: "#345799",
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  welcomepic: {
    width: RFValue(90,900), 
    height: RFValue(120,900),
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: '#E3EDF6',
  },
  welcometext_title: {
    fontSize: RFValue(16,900),
    color: "#345799",
    marginBottom: 3,
  },
  welcometext_enName: {
    fontSize: RFValue(20,900),
    color: "#345799"
  },
  welcometext_thName: {
    fontSize: RFValue(20,900),
    color: "#345799"
  },
  welcometext_Phone_container: {
    flex: 1,
    marginTop: 5,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  welcometext_Phone: {
    fontSize: RFValue(16,900),
    color: "#345799",
  },
  welcomtext_more_container: {
    flex: 0.65,
    flexDirection: "row",
    alignSelf:"stretch",
    justifyContent: 'center',
    alignContent: 'center',
  },
  button_more: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: "white",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#A9D0FF",
    marginHorizontal: 10,
    height: RFValue(25,900),
    marginTop: 5,
    borderRadius: 20
  },
  button_more_text: {
    fontSize: RFValue(16,900),
    color: "#345799",
    alignSelf: "center"
  },
  button_main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: "#E3EDF6",
    borderWidth: 3,
    borderColor: "white",
    aspectRatio: 1
  },
  button_main_container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_main_image_newline: {
    flex: 0.70,
    margin: 5,
    resizeMode: 'contain',
    alignSelf: 'center',
    width: width/2,
    height: width/2
  },
  button_main_image: {
    flex: 0.80,
    margin: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
    width: width/2,
    height: width/2
  },
  button_main_text_container_newline: {
    flex: 0.30,
  },
  button_main_text_container: {
    flex: 0.20,
  },
  button_main_text_newline: {
    marginTop: -20,
    fontSize: RFValue(30,900),
    color: "#345799",
    textAlign: 'center',
    alignSelf: 'center'
  },
  button_main_text: {
    marginTop: -10,
    fontSize: RFValue(30,900),
    color: "#345799",
    textAlign: 'center',
    alignSelf: 'center'
  },
  button_main_bar: {
    flex: 2,
    alignContent: 'stretch',
    flexDirection: 'row',
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "white",
  }
});