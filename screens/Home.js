import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View ,Image, FlatList,ActivityIndicator,Keyboard} from 'react-native';
import {Card, FAB} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home= ({navigation})=>{
    const [data,setData] = useState([]);

    const[loading,setLoading] = useState(true);

    const fetchData=() =>{
        fetch("http://192.168.0.11:3000")
        .then(res => res.json())
        .then(results =>{
            setData(results);
            setLoading(false);
        }).catch(err =>{
            Alert.alert("failed to get the emmployee's info");
        })
    };
    useEffect(()=>{
        fetchData();
    },[]);


    const renderList = ((item)=>{
        //const navigation = this.props;
        return(
            <Card style = {styles.mycard} key = {item.id}  
            onPress={()=> navigation.navigate("Profile",{item})}>
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
        );
    });
    return (
        <View style={{flex:1}}>
            <FlatList 
            data = {data}
            renderItem={({item})=>{
                //return renderList(item)
                return  renderList(item);
              }}
              keyExtractor = {item => `${item._id}`}
              onRefresh={()=>fetchData()}
              refreshing = {loading}
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
export default Home;
//export {Home}