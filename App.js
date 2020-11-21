import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Constants from 'expo-constants'

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Home from './screens/Home'
import CreateEmployee from './screens/CreateEmployee'
import Profile from './screens/Profile'

const Stack = createStackNavigator();

const myOptions = {
  title:"Home!",
  headerTintColor:"#0C0C0C",
  headerStyle:{
    backgroundColor:"#FB98AD"
  }
}

function App() {
  return (
    <View style={styles.container}>
        <Stack.Navigator headermode>
          <Stack.Screen 
          name="Home" 
          component={Home}
          options={myOptions}
          />
          <Stack.Screen 
          name="Create"
          component={CreateEmployee}
          options={{...myOptions,title:"Add Employee"}} 
          />
          <Stack.Screen
          name="Profile"
          component={Profile}
          options={{...myOptions,title:"Profile Info"}} 
          //override title
            />
     </Stack.Navigator>

      {/* <Home/> */}
      {/* <CreateEmployee/> */}
      {/* <Profile/> */}
    </View>
  );
}
export default ()=>{
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
    // </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:Constants.statusBarHeight,
    // alignItems:'center',
    // justifyContent:'center',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
