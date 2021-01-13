import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExerciseListScreen from './Screens/ExerciseListScreen';
import CreateExerciseScreen from './Screens/CreateExerciseSreen';
import AddUserScreen from './Screens/AddUserScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="All" screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            size = 40;

            if (route.name === 'All') {
              iconName = 'list-outline';
            } else if (route.name === 'Record') {
              iconName = 'add-circle-outline';
            } else if (route.name === 'Add User') {
              iconName = 'person-add-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#008cff',
          inactiveTintColor: 'black',
          showLabel: false,
        }}>
        <Tab.Screen name="All" component={ExerciseListScreen} />
        <Tab.Screen name="Record" component={CreateExerciseScreen} />
        <Tab.Screen name="Add User" component={AddUserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}