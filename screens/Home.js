import React from 'react';
import { StyleSheet, Text, View ,Image, FlatList} from 'react-native';
import {Card, FAB} from 'react-native-paper'

const Home=()=>{
    const data = [
        {id:1, name :"a", position:"Frontend dev"},
        {id:2, name :"b", position:"Python dev"},
        {id:3, name :"c", position:"Java dev"},
        {id:4, name :"d", position:"Backend dev"},
        {id:5, name :"d", position:"Backend dev"},
        {id:6, name :"d", position:"Backend dev"},
        {id:7, name :"d", position:"Backend dev"},
        {id:8, name :"d", position:"Backend dev"},
        {id:9, name :"d", position:"Backend dev"},
        {id:10, name :"d", position:"Backend dev"},
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
        
        <View >
            <FlatList
            data = {data}
            renderItem={({item})=>{
                //return renderList(item)
                return  renderList(item)
              }}
              keyExtractor = {item => `${item.id}`}
            />
            <FAB
                style = {styles.fab}
                small = {false}
                icon = "plus"
                theme = {{colors:{accent:"#FB98AD",primary :"#0C0C0C"}}}
                onPress = {() => console.log('Pressed')}
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