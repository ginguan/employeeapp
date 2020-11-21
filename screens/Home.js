import React from 'react';
import { StyleSheet, Text, View ,Image, FlatList} from 'react-native';
import {Card, FAB} from 'react-native-paper'
//import {NavigationContainer} from 'react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
const Home= (props)=>{
    const data = [
        {id:1, name :"a", position:"Frontend dev"},
        {id:2, name :"b", position:"Python dev"},
        {id:3, name :"c", position:"Java dev"},
        {id:4, name :"d", position:"Backend dev"},

    ]
    const renderList = ((item)=>{
        return(
            <Card style = {styles.mycard} key = {item.id}  >
                <View style = {styles.mycard}>
                     <Image
                style={{width:60,height:60,borderRadius:60/2}}
                source={{uri:"https://dl1.cbsistatic.com/i/2019/06/14/11363ce5-31bb-474f-ada7-d1ab02405c94/e6ef10f1560fdc4134abdd7d96282428/imgingest-671445772761252235.png"}}
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
                onPress ={()=> props.navigation.navigate("Create")}
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