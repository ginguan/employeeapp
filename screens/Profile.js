import React, {useState} from 'react';
import { StyleSheet, Text, View ,Image, Modal,Linking,Platform,Alert} from 'react-native';
import {Card, FAB, TextInput,Button, Title} from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';


const Profile = () => {

    const openDial=()=>{
        if(Platform.OS === "android"){
           Linking.openURL(`tel:12345`)
        }else{
           Linking.openURL(`telprompt:123456`)
        }
   }

    return (
        <View style  = {styles.root}>
            <LinearGradient
                colors= {["#F8567B","#FB98AD"]}
                style = {{height :"20%"}}
            />
            <View style = {{alignItems:"center"}}>
                <Image
                    style= {{width:100,height :100,borderRadius:50,marginTop :-50}}
                    source = {{uri:"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=700&q=60"}}
                />
            </View>
            <View style ={{alignItems:"center",margin:7}}> 
                <Title>Amy Smith</Title>
                <Text style = {{fontSize:18}}>web developer</Text>
            </View>
            <Card style={styles.mycard} onPress={()=>{
             Linking.openURL(`mailto:hey@gmail.com`)
         }}>
                <View style = {styles.cardContent}>
                <MaterialIcons name="email" size={30} color="#FB98AD" />
                <Text style = {styles.mytext}>1234amy@gmail.com</Text>
                
                </View>
            </Card>
            <Card style ={styles.mycard}
            onPress = {()=>openDial()}
            >
                <View style = {styles.cardContent}>
                <MaterialIcons name="phone-iphone" size={30} color="#FB98AD" />
                <Text style = {styles.mytext}>12345678</Text>
                </View>
            </Card>
            <Card style ={styles.mycard}>
                <View style = {styles.cardContent}>
                <MaterialIcons name="attach-money" size={30} color="#FB98AD" />
                <Text style = {styles.mytext}>80k</Text>
                </View>
            </Card>
            <View style={{flexDirection:"row",justifyContent:"space-around",padding:10}}>
                <Button 
                icon="account-edit"
                mode="contained"
                theme={theme}
                onPress={() =>  console.log("edit")}>
                    Edit
                </Button>
                <Button 
                icon="delete"
                mode="contained"
                theme={theme}
                onPress={() =>  console.log("Fire?")}>
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

export default Profile