import React, {useState} from 'react';
import axios from 'axios';
import {View, Text, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';

function CreateExerciseScreen({ navigation }) {

    const [data, setData] = useState([]);
    const [username, setUsername] = useState('name');
    const [descriptionValue, setDescripitonValue] = useState('');
    const [durationValue, setDurationValue] = useState(0);
    const [date, setDate] = useState();

    axios.get('http://localhost:5000/users').then((res) => {
    setData(res.data)}).catch((err) => console.log(err));;
    let USERS = data.map(user => {
            return (<Picker.Item label={user.username} value={user.username} key={user._id} />)
          })
    
    return(
      <View style={{
        flex: 1
      }}>
        <Text style={{fontWeight: 'bold', fontSize: 30, color: 'white', backgroundColor: "#008cff", padding: 15}}>Record Exercise</Text>
        <Text style={{padding: 15, fontSize: 20}} >Username:</Text>
        <Picker
          selectedValue={username}
          style={{ height: 50, margin: 15}}
          onValueChange={(itemValue) => {setUsername(itemValue)}}
        >
          {USERS}
        </Picker>
        <Text style={{padding: 15, fontSize: 20}} >Description:</Text>
        <TextInput style={{height: 40, borderWidth: 1, borderColor: 'gray', margin: 15}} onChangeText={text => setDescripitonValue(text)}></TextInput>
        <Text style={{padding: 15, fontSize: 20}} >Duration:</Text>
        <TextInput keyboardType='numeric' style={{height: 40, borderWidth: 1, borderColor: 'gray', margin: 15}} onChangeText={text => setDescripitonValue(text)}></TextInput>
        <Text style={{padding: 15, fontSize: 20}} >Date:</Text>
        <DatePicker
        style={{width: 200}}
        date={date}
        mode="date"
        placeholder="Select Date"
        format="MM-DD-YYYY"
        minDate="01-01-2016"
        maxDate="01-01-2099"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            display: 'none'
          },
          dateInput: {
            marginLeft: 15
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {setDate(date)}}
      />
      <View style={{margin:15}}>
        <Button title='Create'/>
      </View>
      </View>
    )
}

export default CreateExerciseScreen;