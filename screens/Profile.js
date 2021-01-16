import React, {useState} from 'react';
import { StyleSheet, Text, View ,Image, Modal,Linking,Platform,Alert} from 'react-native';
import {Card, FAB, TextInput,Button, Title} from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';



const Profile = (props) => {

    const {_id,name,picture,phone,salary,email,position} = props.route.params.item;
    const deleteEmployee = ()=>{
        fetch("http://192.168.0.11:3000/delete",{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                _id : _id
            })
        })
        .then(res=>res.json())
        .then(deletedEmp=>{
            Alert.alert("Employee is fired")
            props.navigation.navigate("Home")
        })
        .catch(err=>{
            Alert.alert("error")
        })
        
    };

    const openDial=()=>{
        if(Platform.OS === "android"){
           Linking.openURL(`tel:${phone}`);
        }else{
           Linking.openURL(`telprompt:${phone}`);
        }
   };

    return (
        <View style  = {styles.root}>
            <LinearGradient
                colors= {["#F8567B","#FB98AD"]}
                style = {{height :"20%"}}
            />
            <View style = {{alignItems:"center"}}>
                <Image
                    style= {{width:100,height :100,borderRadius:50,marginTop :-50}}
                    source = {{uri:picture}}
                />
            </View>
            <View style ={{alignItems:"center",margin:7}}> 
                <Title>{name }</Title>
                <Text style = {{fontSize:18}}>
                    {position}
                </Text>
            </View>
            <Card style={styles.mycard} onPress={()=>{
             Linking.openURL(`mailto:${email}`);
         }}>
                <View style = {styles.cardContent}>
                <MaterialIcons name="email" size={30} color="#FB98AD" />
                <Text style = {styles.mytext}>
                    {email}
                </Text>
                
                </View>
            </Card>
            <Card style ={styles.mycard}
            onPress = {()=>openDial()}
            >
                <View style = {styles.cardContent}>
                <MaterialIcons name="phone-iphone" size={30} color="#FB98AD" />
                <Text style = {styles.mytext}>
                    {phone}
                </Text>
                </View>
            </Card>
            <Card style ={styles.mycard}>
                <View style = {styles.cardContent}>
                <MaterialIcons name="attach-money" size={30} color="#FB98AD" />
                <Text style = {styles.mytext}>
                    {salary}
                </Text>
                </View>
            </Card>
            <View style={{flexDirection:"row",justifyContent:"space-around",padding:10}}>
                <Button 
                icon="account-edit"
                mode="contained"
                theme={theme}
                onPress={() =>  {
                    props.navigation.navigate("Create",
                    {_id,name,picture,phone,salary,email,position}
                    );
                }}>
                    Edit
                </Button>
                <Button 
                icon="delete"
                mode="contained"
                theme={theme}
                onPress={() =>  deleteEmployee()}>
                    Resigned
                </Button>
            </View>
        </View>
    ) 
        
        
    
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        margin:3
    },
cardContent:{
    flexDirection:"row",
    padding:8
},
mytext:{
    fontSize:18,
    marginTop:3,
    marginLeft:5
}
})

const theme = {
    colors:{
        primary:"#FB98AD"
    }
}

export default Profile;