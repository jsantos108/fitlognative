import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, Pressable, StyleSheet} from 'react-native';
import axios from 'axios';

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
    <View style={{ flex: 1}}>
        <Text style={{fontWeight: 'bold', fontSize: 30, color: 'white', backgroundColor: "#008cff", padding: 15}}>All Exercises</Text>
        <FlatList
            data={exercises}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
                <Pressable onPress={() => {
                    console.log(item.username);
                    navigation.navigate('Edit Exercise', {
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
    </View>
  );
}

export default ExerciseListScreen;