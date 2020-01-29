import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Image, FlatList, ActivityIndicator } from 'react-native';
import {Button} from 'react-native-elements';
import CalendarPicker from 'react-native-calendar-picker';
//import SearchDropdownHos from './HospitalDropdown';
//import SearchDropdownDepart from './DepartmentDropdown';
import { Dropdown } from 'react-native-material-dropdown';
import SearchableDropdown from 'react-native-searchable-dropdown';
// https://api.myjson.com/bins/m2ou6 // doctor data jason link

export default class SchedulePage extends React.Component {

	// initial state of date and time in appointment date and appointment time
	state = {
		text: "", // symptom text
		selectedStartDate: null,
		selectedTime: "", // time text
		selectedDoc: false, // select doctor

		// initial state of getting doctor data from jason link
		loading: false,
		data: [],
		error: null,
		// adding this for set hospital and department state in boolean
		selectHos: false,
		selectedHos: "",
		selectDept: false,
		selectedDept: "",
		// reset the input text in hospital and department
		resetText: false,
	  };
		arrayholder = [];
	
	// function to call makeRemoteRequest();
	componentDidMount() {
		this.makeRemoteRequest();
	  }

	// function makeRemoteRequest(); to get the data from jason link into our array
	makeRemoteRequest = () => {
		const url = `https://api.myjson.com/bins/m2ou6`;
		this.setState({ loading: true });
	
		fetch(url)
		  .then(res => res.json())
		  .then(res => {
			this.setState({
			  data: res.results,
			  error: res.error || null,
			  loading: false
			});
			this.arrayholder = res.results;
		  })
		  .catch(error => {
			this.setState({ error, loading: false });
		  });
	};

	// filter function which is filter doctor from hospital
	selectHospital = text => {
		this.setState({
			selectedHos: text,
			selectHos: true,
		})
	}
	
	// filter function which is filter doctor from department
	selectDepartment = text => {
		this.setState({
			selectedDept: text,
			selectDept: true,
		})
	}

	// when press the touchableoppacity in doctor
	_onPressButton = () => {

	}

	// when text change in symptom
	handleChangeText = (typedText) => {
		this.setState({text: typedText});
	}

	// when date was change in calendar in appointment date
	onDateChange = (date)=> {
		  this.setState({
		  selectedStartDate: date,
		});
		//alert(date);
	}

	// when change the selected time in appointment time
	onChangeHandler = (value) => {
		this.setState({selectedTime: value});
	  }

	// when press the button for selecting doctor
	pressForSelectDoc = ( item ) => {
		alert("Making Appointment with Dr. " + item.fname + " " + item.lname);
		this.setState({
			selectedDoc: true,
		})
	}
	
	// show the list of doctor ///// ///// ///// ///// ///// ///// ///// ///// /////
	renderItem = ({ item }) => {
		//const { selectedDoc } = this.state;
		//const buttonBg1 = selectedDoc ? '#F5B041' : '#5DADE2';
		// if select hospital but didn't select the department
		if (this.state.selectHos && this.state.selectDept == false) {
			if (item.hospital == this.state.selectedHos) {
				return (
					<View style={styles.docpicview}>
					<TouchableOpacity
						onPress={() => (this._onPressButton)}
						style={styles.docpicbutton}>
					<Image style={styles.docpicbutton} source={{ uri: item.img }} />
					</TouchableOpacity>
					<Button
						title = "Select"
						titleStyle={styles.doctextbutton}
						buttonStyle={{backgroundColor: '#5DADE2', borderRadius: 0, height: 30}}
						onPress={() => (this.pressForSelectDoc(item))}
        		    />
				</View>
				)
			}
		}
		// if select department but didn't select the hospital
		else if (this.state.selectHos == false && this.state.selectDept) {
			if (item.department == this.state.selectedDept) {
				return (
					<View style={styles.docpicview}>
					<TouchableOpacity
						onPress={() => (this._onPressButton)}
						style={styles.docpicbutton}>
					<Image style={styles.docpicbutton} source={{ uri: item.img }} />
					</TouchableOpacity>
					<Button
						title = "Select"
						titleStyle={styles.doctextbutton}
						buttonStyle={{backgroundColor: '#5DADE2', borderRadius: 0, height: 30}}
						onPress={() => (this.pressForSelectDoc(item))}
        		    />
				</View>
				)
			}
		}
		// if select both hospital and department
		else if (this.state.selectHos && this.state.selectDept) {
			if (item.hospital == this.state.selectedHos) {
				if (item.department == this.state.selectedDept) {
					return (
						<View style={styles.docpicview}>
						<TouchableOpacity
							onPress={() => (this._onPressButton)}
							style={styles.docpicbutton}>
						<Image style={styles.docpicbutton} source={{ uri: item.img }} />
						</TouchableOpacity>
						<Button
							title = "Select"
							titleStyle={styles.doctextbutton}
							buttonStyle={{backgroundColor: '#5DADE2', borderRadius: 0, height: 30}}
							onPress={() => (this.pressForSelectDoc(item))}
						/>
					</View>
					)
				}
			}
		}
		// if didn't select both hospital and department
		else if (this.state.selectHos == false && this.state.selectDept == false){
			return (
				<View style={styles.docpicview}>
					<TouchableOpacity
						onPress={() => (this._onPressButton)}
						style={styles.docpicbutton}>
					<Image style={styles.docpicbutton} source={{ uri: item.img }} />
					</TouchableOpacity>
					<Button
						title = "Select"
						titleStyle={styles.doctextbutton}
						buttonStyle={{backgroundColor: '#5DADE2', borderRadius: 0, height: 30}}
						onPress={() => (this.pressForSelectDoc(item))}
        		    />
				</View>
			)
		}
	}
	  
	render(){
		///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// /////
		if (this.state.loading) {
			return (
			  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<ActivityIndicator />
			  </View>
			);
		}

		const { selectedStartDate } = this.state;
		const startDate = selectedStartDate ? selectedStartDate.toString() : '';
		const { selectedTime } = this.state;

		return(
		<View style={{ flex: 1 }}>
			{/* header for now (delete later) */}
			<View style={{height: 50, backgroundColor: '#21618C'}} />
			<KeyboardAvoidingView behavior='padding' style={{flex: 1, flexDirection: "column"}}>
				<ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1 }} >
					
					<View style={{ marginBottom: 15 }}>
						<View style={styles.barhead}> 
							<Text style={styles.texthead}> Hospital </Text>
						</View>
						<SearchableDropdown
							onTextChange={
								(text) => (item, text) => item.name.toLowerCase().startsWith(text.toLowerCase())
							}
							// call selectHospital();
							onItemSelect={(item) =>  {
								this.selectHospital(item.name)
								if(item.id == 99999){
									this.setState({
										selectHos: false,
									})
								}
							}}
							containerStyle={{
								padding: 5
							}}
							textInputStyle={{
								padding: 12,
								borderWidth: 1,
								borderColor: '#ccc',
								borderRadius: 5
							}}
							itemStyle={{
								padding: 10,
								marginTop: 2,
								backgroundColor: '#ddd',
								borderColor: '#bbb',
								borderWidth: 1,
								borderRadius:5
							}}
							itemTextStyle={{
							color: '#222'
							}}
							itemsContainerStyle={{
								maxHeight: 140
							}}
							items={hospital}
							placeholder="Hospital (required)"
							resetValue={false}
							underlineColorAndroid='transparent'
							listProps={
								{
									nestedScrollEnabled: true,
								}
							}
							/>
					</View>

					<View style={{ marginBottom: 15 }}>
						<View style={styles.barhead}> 
							<Text style={styles.texthead}> Department </Text>
						</View>
						<SearchableDropdown
							onTextChange={
								(text) => (item, text) => item.name.toLowerCase().startsWith(text.toLowerCase())
							}
							// call selectDepartment();
							onItemSelect={(item) =>  {
								this.selectDepartment(item.name)
								if(item.id == 99999){
									this.setState({
										selectDept: false,
										//resetText: true,
									})
								}
							}}
							containerStyle={{
								padding: 5
							}}
							textInputStyle={{
								padding: 12,
								borderWidth: 1,
								borderColor: '#ccc',
								borderRadius: 5
							}}
							itemStyle={{
								padding: 10,
								marginTop: 2,
								backgroundColor: '#ddd',
								borderColor: '#bbb',
								borderWidth: 1,
								borderRadius:5
							}}
							itemTextStyle={{
							color: '#222'
							}}
							itemsContainerStyle={{
								maxHeight: 140
							}}
							items={department}
							placeholder="Department (required)"
							//resetValue={this.state.resetText}
							resetValue={false}
							underlineColorAndroid='transparent' />
					</View>

				{/* doctor section ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// */}
				<View style={styles.barhead}> 
					<Text style={styles.texthead}> Doctor </Text>
				</View>
				<FlatList
					horizontal={true}
					data={this.state.data}
					// the new one
					keyExtractor={item => item.id}
					renderItem={this.renderItem}
					extraData={this.state}
        		/>

				<View style={{ marginBottom: 15 }}>
					<View style={styles.barhead}> 
						<Text style={styles.texthead}> Symptom </Text>
					</View>
					<View style={{padding: 15}}>
						<TextInput
							style={{marginTop: 5,
									marginLeft: 5,
									marginRight: 5,
									borderWidth: 1,
									height: 90,
									borderColor: '#ccc',
									borderRadius: 5 }}
							multiline={true}
							placeholder=" Input your Symptom"
							onChangeText={this.handleChangeText}
							value={this.state.text}
							scrollEnabled = {false}
						/>
					</View>
				</View>

				<View style={{ marginBottom: 15 }}>
					<View style={styles.barhead}> 
						<Text style={styles.texthead}> Appointment Date </Text>
					</View>
					<CalendarPicker
						onDateChange={this.onDateChange}
					/>

					<View style={{ marginBottom: 15 }}>
						<View style={styles.barhead}> 
							<Text style={styles.texthead}> Appointment Time </Text>
						</View>
						<View style={{paddingLeft: 20, paddingRight: 20}}>
							<Dropdown
								label='Select Available Time'
								data={timeRange}
								onChangeText={(value) => this.onChangeHandler(value)}
								/>
						</View>
					</View>

					<View style={{ alignItems: 'center', width: 325, borderColor: '#ccc', borderWidth: 1, marginLeft: 23, padding: 10, borderRadius:5 }}>
						<View style={{ width: 325, alignItems:'center' }}>
							<Text> Selected Date and Time : {'\n'} </Text>
						</View>
						<View style={{ width: 325, alignItems:'center' }}>
							<Text> { startDate } {'\n'} </Text>
						</View>
						<View style={{ width: 325, alignItems:'center' }}>
							<Text> { selectedTime } {'\n'} </Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	</View>
		);
	}
}

var  hospital  = [
	{ id: 99999, name: 'None' },
	{ id: 1, name: 'A' },
	{ id: 2, name: 'B' },
	{ id: 3, name: 'C' },
	{ id: 4, name: 'AAA' },
	{ id: 5, name: 'BBB' },
	{ id: 6, name: 'CCC' },
];

var  department  = [
	{ id: 99999, name: 'None' },
	{ id: 1, name: 'Medicine' },
	{ id: 2, name: 'Ear Nose and Throat' },
	{ id: 3, name: 'Psychology' },
	{ id: 4, name: 'อายุรกรรม' },
	{ id: 5, name: 'หู คอ จมูก' },
	{ id: 6, name: 'จิตเวช' },
];

var timeRange = [{
	value: '08:00 - 09:00',
  }, {
	value: '09:00 - 10:00',
  }, {
	value: '10:00 - 11:00',
  }, {
	value: '11:00 - 12:00',
  }, {
	value: '12:00 - 13:00',
  }, {
	value: '13:00 - 14:00',
  }, {
	value: '14:00 - 15:00',
  }, {
	value: '15:00 - 16:00',
  }, {
	value: '16:00 - 17:00',
  }

];

const styles = StyleSheet.create({
  container: {  
    flex: 1,  
    alignItems: 'center',  
    justifyContent: 'center',  
},  
textStyle:{  
  margin: 24,  
  fontSize: 25,  
  fontWeight: 'bold',  
  textAlign: 'center',  
},  
pickerStyle:{  
  height: 150,  
  width: "80%",  
  color: '#344953',  
  justifyContent: 'center',  
},
barhead: {
  height: 28,
  backgroundColor: '#5DADE2',
},
texthead: {
  color: '#344953',
  marginTop: 5,
  marginLeft: 15,
},
docpicview: {
  borderColor: '#ccc', borderWidth: 1, marginBottom: 10, marginTop: 10, marginLeft: 10, width: 90, height: 150,
},
docpicbutton: {
  borderColor: '#ccc', height: 118, backgroundColor: '#D7DBDD'
},
docbutton: {
  backgroundColor: '#5DADE2', borderRadius: 0, height: 30
},
doctextbutton: {
	fontSize: 13, textAlign: 'center'
}
})

/*
        <ScrollView horizontal={true} style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableOpacity
            onPress={() => (this._onPressButton)}
            style={styles.docpicbutton}>
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 14 }}> Image </Text>
        </TouchableOpacity>
        </ScrollView>
*/