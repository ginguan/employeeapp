import React, {useState} from 'react';
import { StyleSheet, Text, View ,Image, Modal,Alert} from 'react-native';
import {Card, FAB, TextInput,Button} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CreateEmployee = () =>{
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [salary,setSalary] = useState("")
    const [position,setpPosition] = useState("")
    const [picture,setPicture] = useState("")
    const [modal,setModal] = useState(false)

    const pickFromGallery = async ()=>{
        const {granted} =  await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(granted){
             let data =  await ImagePicker.launchImageLibraryAsync({
                  mediaTypes:ImagePicker.MediaTypeOptions.Images,
                  allowsEditing:true,
                  aspect:[1,1],
                  quality:0.5
              })
              if(!data.cancelled){
                  let newfile = { 
                    uri:data.uri,
                    type:`test/${data.uri.split(".")[1]}`,
                    name:`test.${data.uri.split(".")[1]}` 
                }
                  handleUpload(newfile)
              }
        }else{
           Alert.alert("Permission is needed to upload ur photos")
        }
     }
     const pickFromCamera = async ()=>{
        const {granted} =  await Permissions.askAsync(Permissions.CAMERA)
        if(granted){
             let data =  await ImagePicker.launchCameraAsync({
                  mediaTypes:ImagePicker.MediaTypeOptions.Images,
                  allowsEditing:true,
                  aspect:[1,1],
                  quality:0.5
              })
            if(!data.cancelled){
                let newfile = { 
                  uri:data.uri,
                  type:`test/${data.uri.split(".")[1]}`,
                  name:`test.${data.uri.split(".")[1]}` 
  
              }
                handleUpload(newfile)
            }
            console.log(data)
        }else{
           Alert.alert("Permission is needed to upload ur photos")
        }
     }
     const handleUpload = (image)=>{
        const data = new FormData()
        data.append('file',image)
        data.append('upload_preset','employeeApp')
        data.append("cloud_name","dvqqs4tl5")
        //https://cloudinary.com/ image cloud
        fetch("https://api.cloudinary.com/v1_1/dvqqs4tl5/image/upload",{
            method:"post",
            body:data
        }).then(res=>res.json()).
        then(data=>{
            setPicture(data.url)
            setModal(false)
            console.log(data)
        }).catch(err=>{
            Alert.alert("error while uploading")
        })
   }
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
            <Button 
            icon={picture==""?"upload":"check"}
            mode="contained" onPress={() => setModal(true)} theme={theme} >
                Upload Image
            </Button>
            <Button icon="content-save" mode="contained" onPress={() =>console.log("saved")} theme={theme}>
                Save
            </Button>
            <View>
            <Image
                   
                    style= {{width:100,height :100,position:"relative",top:15,left: 150
                        }}
                    source = {picture==""?{url:"https://i2.wp.com/buttercross.com/wp-content/uploads/2018/01/blank-profile-picture-973460_960_720.png?resize=300%2C300&ssl=1s"}:{uri:picture}}
                />
            </View>
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
                    <Button icon="camera" mode="contained" onPress={() => pickFromCamera()} theme={theme}>
                    Camera
                    </Button>
                    <Button icon="image-area" mode="contained" onPress={() =>  pickFromGallery()} theme={theme}>
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