import React, {useState} from 'react';
import axios from 'axios';
import {View, Text, TextInput, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function AddUserScreen({ navigation }) {
    const [name, setName] = useState('');

    function createUser() {
      const user = {
          username: name
      }

      console.log(user);

      axios.post("http://localhost:5000/users/add", user)
          .then(res => 
          console.log(res)
      ).catch(err => console.log(err));

      setName('');
      navigation.navigate('All');
    }

    return(
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 30, color: 'white', backgroundColor: "#008cff", padding: 15}}>Create New User</Text>
        
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-around', margin: 30 }}>
            <Ionicons name='home-outline' size={40} color='#008cff' onPress={() => navigation.navigate('All')} />
            <Ionicons name='add-outline' size={40} color='#008cff' onPress={() => navigation.navigate('Record')} />
        </View>
        
        <Text style={{padding: 15, fontSize: 20}} >Username:</Text>
        <TextInput placeholder={name} style={{height: 40, borderWidth: 1, borderColor: 'gray', margin: 15, padding:5}} onChangeText={text => setName(text)}></TextInput>
        <View style={{margin:15}}>
          <Button title='Create User' onPress={createUser}/>
        </View>
      </View>
    )
}

export default AddUserScreen;