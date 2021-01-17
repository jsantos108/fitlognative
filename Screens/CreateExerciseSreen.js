import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';

function CreateExerciseScreen({ navigation }) {

    const [data, setData] = useState([]);
    const [username, setUsername] = useState('Select User');
    const [description, setDescription] = useState('Describe your activity');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date().toDateString());

   
    axios.get('http://localhost:5000/users').then((res) => {
      setData(res.data)}).catch((err) => console.log(err));
    let USERS = data.map(user => {
            return (<Picker.Item label={user.username} value={user.username} key={user._id} />)
          })

    useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('refreshed');
    });
      return unsubscribe
    }, [navigation]);
    
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

        navigation.navigate('All');
    }


    return(
      <View style={{
        flex: 1
      }}>
        <Text style={{fontWeight: 'bold', fontSize: 30, color: 'white', backgroundColor: "#008cff", padding: 15}}>Record Exercise</Text>
        <Text style={{padding: 15, fontSize: 20}} >Username:</Text>
        <Picker
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
        <Button title='Create' onPress={createExercise}/>
      </View>
      </View>
    )
}

export default CreateExerciseScreen;