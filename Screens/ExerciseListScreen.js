import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

function ExerciseListScreen({ navigation }) {

    const {exercises, setExercises} = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/exercises').then(res => {
                console.log(res.data)
                // this.setExercises(res.data)
            }).catch(err => console.log(err));
    });
    
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text>Exercise List Works!</Text>
      </View>
    )
}

export default ExerciseListScreen;