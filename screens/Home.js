import React from 'react';
import { StyleSheet, Text, View ,Image, FlatList} from 'react-native';
import {Card, FAB} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateEmployee from './CreateEmployee';
import Profile from './Profile';

const Stack = createStackNavigator();

const Home= ({navigation})=>{
    const data = [
         {id:"1", name :"lisa", email :"abc@abc.com", phone:"12333", salary:"100k", position:"Frontend dev",picture:"https://dl1.cbsistatic.com/i/2019/06/14/11363ce5-31bb-474f-ada7-d1ab02405c94/e6ef10f1560fdc4134abdd7d96282428/imgingest-671445772761252235.png"},
        
        {id:"2", name :"jennie", email :"abc2@abc.com", phone:"1231", salary:"100k", position:"Python dev",picture:"https://static.wikia.nocookie.net/blinks/images/5/51/The_Album_Jennie_Teaser_Poster_1.jpg/revision/latest?cb=20200923002144"},
        {id:"3", name :"rosie", email :"abc1@abc.com", phone:"1232", salary:"100k",position:"Java dev",picture:"https://i2.wp.com/blackpinkupdate.com/wp-content/uploads/2018/06/blackpink-rose-instagram-photo-roses-are-rosie-play-with-hair1.jpg?fit=636%2C729&ssl=1"},
        {id:"4", name :"jisoo", email :"ab32c@abc.com", phone:"1233",salary:"100k", position:"Backend dev",picture:"https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/06/08/4b0bdfc6-a639-11ea-8ea0-d7434be00753_image_hires_121748.jpg?itok=44SyZaXz&v=1591589877"},

    ]



    const renderList = ((item)=>{
        //const navigation = this.props;
        return(
            <Card style = {styles.mycard} key = {item.id}  
            onPress={()=> navigation.navigate("Profile",{item})}
            //onPress ={()=> props.navigation.navigate("Create")}
            >
                <View style = {styles.mycard}>
                     <Image
                style={{width:60,height:60,borderRadius:60/2}}
                source={{uri:item.picture}}
            />
            <View style = {{marginLeft:10}}>
                <Text style= {styles.text}>{item.name}</Text>
        <Text style= {styles.text}>{item.position}</Text>
            </View>
            
                </View>
           
            </Card>
        )
    })
    return (
        
        <View style={{flex:1}}>
            <FlatList 
            
            data = {data}
            renderItem={({item})=>{
                //return renderList(item)
                return  renderList(item)
              }}
              keyExtractor = {item => `${item.id}`}
            />
            <FAB  
                onPress ={()=> navigation.navigate("Create")}
                style = {styles.fab}
                small = {false}
                icon = "plus"
                theme = {{colors:{accent:"#FB98AD",primary :"#0C0C0C"}}}
                
            />
        {/* { renderList} */}
        </View>
            
        
    )

}
const styles = StyleSheet.create({
    mycard:{
        margin:5,
        //padding:5
        flexDirection:'row'
       
    },
    cardView:{
        flexDirection:"row",
        padding:6
   },
    text:{
        fontSize:18,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
})
export default Home
//export {Home}