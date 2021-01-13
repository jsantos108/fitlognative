import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View, Text} from 'react-native';
import axios from 'axios';

function ExerciseListScreen({ navigation }) {

    
  const [exercises, setExercises] = useState([]);

//   useEffect(() => {
//     fetch('https://reactnative.dev/movies.json')
//       .then((response) => response.json())
//       .then((json) => setData(json.movies))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/exercises').then(res => {
                console.log(res.data)
                setExercises(res.data)
            }).catch(err => console.log(err));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
        <Text style={{fontWeight: 'bold', fontSize: 30}}>All Exercises</Text>
        <FlatList
          data={exercises}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <Text style={{paddingTop: 15, fontSize: 20}}>{item.username}  |  {item.description}</Text>
          )}
        />
    </View>
  );
}

export default ExerciseListScreen;