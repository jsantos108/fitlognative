import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, Pressable, ScrollView, } from 'react-native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ExerciseListScreen({ navigation }) {

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      axios.get('http://localhost:5000/exercises').then(res => {
                    console.log(res.data)
                    setExercises(res.data)
                }).catch(err => console.log(err));
      }, []);
      return unsubscribe;
  }, [navigation]);
    

  return (
    <ScrollView>
        <Text style={{fontWeight: 'bold', fontSize: 30, color: 'white', backgroundColor: "#008cff", padding: 15}}>All Exercises</Text>
        
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-around', margin:30 }}>
            <Ionicons name='add-circle-outline' size={40} color='#008cff' onPress={() => navigation.navigate('Record')} />
            <Ionicons name='person-add-outline' size={40} color='#008cff' onPress={() => navigation.navigate('AddUser')} />
        </View>
        
        <FlatList
            data={exercises}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
                <Pressable onPress={() => {
                    console.log(item.username);
                    navigation.navigate('Edit', {
                      id: item._id,
                      username: item.username,
                      description: item.description,
                      duration: item.duration,
                      date: item.date
                    });
                  }}>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'space-between',}}>
                        <Text style={{padding: 15, fontSize: 20}}>{item.username}</Text>
                        <Text style={{padding: 15, fontSize: 20}}>{item.duration}</Text>
                        <Text style={{padding: 15, fontSize: 20}}>{item.description}</Text>
                </View>
                </Pressable>
            )}
        />
    </ScrollView>
  );
}

export default ExerciseListScreen;