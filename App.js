import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


function ExerciseListScreen({ navigation }) {
  return(
    <View style={styles.container}>
        <Text>Exercise List Working!</Text>
      </View>
  )
}
function CreateExerciseScreen({ navigation }) {
  return(
    <View style={styles.container}>
        <Text>Create Exercise Working!</Text>
      </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="All" screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'All') {
              iconName = 'list-outline';
            } else if (route.name === 'Record') {
              iconName = 'add-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'aqua',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="All" component={ExerciseListScreen} />
        <Tab.Screen name="Record" component={CreateExerciseScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
