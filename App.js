import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExerciseListScreen from './Screens/ExerciseListScreen';
import CreateExerciseScreen from './Screens/CreateExerciseSreen';
import AddUserScreen from './Screens/AddUserScreen';
import EditExerciseScreen from './Screens/EditExerciseScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="All" headerMode='none'>
        <Stack.Screen name="All" component={ExerciseListScreen} />
        <Stack.Screen name="Record" component={CreateExerciseScreen} />
        <Stack.Screen name="Edit" component={EditExerciseScreen} />
        <Stack.Screen name="AddUser" component={AddUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}