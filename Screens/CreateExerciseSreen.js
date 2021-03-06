import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';

function CreateExerciseScreen({ navigation }) {

    const [data, setData] = useState([]);
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState();
    const [date, setDate] = useState(new Date().toDateString());

   
    axios.get('http://localhost:5000/users').then((res) => {
      setData(res.data)}).catch((err) => console.log(err));
    let USERS = data.map(user => {
            return (<Picker.Item label={user.username} value={user.username} key={user._id} />)
          })
    
    function createExercise() {

        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        }

        console.log(exercise);

        axios.post("http://localhost:5000/exercises/add", exercise)
            .then(res => 
            console.log(res)
        ).catch(err => console.log(err));
        setUsername('');
        setDescription('');
        setDuration();
        navigation.navigate('All');
    }


    return(
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 30, color: 'white', backgroundColor: "#008cff", padding: 15}}>Record Exercise</Text>
        
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-around', margin: 30}}>
            <Ionicons name='home-outline' size={40} color='#008cff' onPress={() => navigation.navigate('All')} />
            <Ionicons name='person-add-outline' size={40} color='#008cff' onPress={() => navigation.navigate('AddUser')} />
        </View>
        
        <Text style={{padding: 15, fontSize: 20}} >Username:</Text>
        <Picker
          selectedValue={username}
          style={{ height: 50, margin: 15}}
          onValueChange={(itemValue) => {setUsername(itemValue)}}
        >
          <Picker.Item label='Select User' value='Select User'/>
          {USERS}
        </Picker>

        <Text style={{padding: 15, fontSize: 20}} >Description:</Text>
        <TextInput placeholder={description} style={{height: 40, borderWidth: 1, borderColor: 'gray', margin: 15, padding:5}} onChangeText={text => setDescription(text)}></TextInput>

        <Text style={{padding: 15, fontSize: 20}} >Duration:</Text>
        <TextInput placeholder={duration} keyboardType='numeric' style={{height: 40, borderWidth: 1, borderColor: 'gray', margin: 15, padding:5}} onChangeText={number => setDuration(number)}></TextInput>

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
        <Button title='Record Exercise' onPress={createExercise}/>
      </View>
      </View>
    )
}

export default CreateExerciseScreen;