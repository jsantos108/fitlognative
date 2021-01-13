import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

function CreateExerciseScreen({ navigation }) {

    // const {users, setUsers} = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    
    let DATA
    let USERS

    useEffect(() => {
      axios.get('http://localhost:5000/users').then(res => {
        DATA = res.data
        console.log(DATA)
        USERS = DATA.map(user => {
          return (<Picker.Item label={user.username} value={user.username} />)
        })
    }).catch(err => console.log(err));
      }, []);

    return(
      <View style={{
        flex: 1
      }}>
        <Text style={{fontWeight: 'bold', fontSize: 30, backgroundColor: "#008cff", padding: 15}}>Record Exercise</       Text>
            <Text style={{padding: 15, fontSize: 20}} >Username:</Text>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, margin: 15}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          {USERS}
        </Picker>
      </View>
    )
}

export default CreateExerciseScreen;