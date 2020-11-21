import React, {useState} from 'react';
import { StyleSheet, Text, View ,Image, Modal} from 'react-native';
import {Card, FAB, TextInput,Button} from 'react-native-paper'

const CreateEmployee = () =>{
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [salary,setSalary] = useState("")
    const [position,setpPosition] = useState("")
    const [picture,setPicture] = useState("")
    const [modal,setModal] = useState(false)

    return(
        <View style= {styles.root}>
            <TextInput
                style = {styles.inputStyle}
                label = 'Name'
                value = {name}
                theme = {theme}
                mode = "outlined"
                onChangeText = {text => setName(text) }
            />
            <TextInput
                style = {styles.inputStyle}
                label = 'Email'
                value = {email}
                theme = {theme}
                mode = "outlined"
                onChangeText = {text => setEmail(text) }
            />
            <TextInput
                label='Phone'
                style={styles.inputStyle}
                value={phone}
                theme={theme}
                keyboardType="number-pad"
                mode="outlined"
                onChangeText={text =>setPhone(text)}
            />
             
            <TextInput
                label='Salary'
                style={styles.inputStyle}
                value={salary}
                theme={theme}
                mode="outlined"
                onChangeText={text =>setSalary(text)}
            />
            <TextInput
                label='Position'
                style={styles.inputStyle}
                value={position}
                theme={theme}
                mode="outlined"
                onChangeText={text =>setPosition(text)}
            />
            <Button icon="upload" mode="contained" onPress={() => setModal(true)} theme={theme} >
                Upload Image
            </Button>
            <Button icon="content-save" mode="contained" onPress={() =>console.log("saved")} theme={theme}>
                Save
            </Button>
            <Modal
                animationType = "slide"
                transparent = {true}
                visible = {modal}
                onRequestClose = {()=>{
                    setModal(false)
                }}
                
            >
            <View style = {styles.modalView}>
                <View  style = {styles.modalButtonView} >
                    <Button icon="camera" mode="contained" onPress={() => console.log("camera")} theme={theme}>
                    Camera
                    </Button>
                    <Button icon="image-area" mode="contained" onPress={() => console.log("gallary")} theme={theme}>
                    Gallary
                    </Button>
                </View>
                    <Button  mode="contained" onPress={() => setModal(false)} theme={theme} >
                        Cancel
                    </Button>  
            </View>
            </Modal>
            
           
        </View>
    )
}
const theme = {
    colors:{
        accent:"#FB98AD",
        primary :"#FB98AD"
    },
    
}
const styles=StyleSheet.create({
    root:{
       flex:1,
    },
    inputStyle:{
        margin:5
    },
    modalView:{
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"white"

    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    }
})

export default  CreateEmployee