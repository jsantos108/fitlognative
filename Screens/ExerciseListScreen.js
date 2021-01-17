import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, Pressable, StyleSheet} from 'react-native';
import axios from 'axios';

function ExerciseListScreen({ navigation }) {

    const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/exercises').then(res => {
                console.log(res.data)
                setExercises(res.data)
            }).catch(err => console.log(err));
  }, []);

  return (
    <View style={{ flex: 1}}>
        <Text style={{fontWeight: 'bold', fontSize: 30, color: 'white', backgroundColor: "#008cff", padding: 15}}>All Exercises</Text>
        <FlatList
            data={exercises}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
                <Pressable onPress={() => {
                    console.log('Working');
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
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

export default ExerciseListScreen;