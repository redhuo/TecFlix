import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput , Button} from 'react-native';
import { useState, useCallback } from 'react';
import VideoPlayer from './VideoPlayer'
import PlayListVideoList from './PlayListVideoList';
import {StyleSheet } from 'react-native';
/*
Componente que se encarga de editar la informacion de un  video
*/
const EditarVideo = ({ route }) => {
    const [text, setText] = useState('');
    const video = route.params;
    console.log(video.video);
    console.log(text);
    const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'white'
  }
});
  return (
    <View>
      <Text style={styles.innerText} > Editar Cancion </Text>
      <TextInput
        style={{height: 40, backgroundColor: "white"}}
        placeholder="Escribe el nombre a cambiar"
        onChangeText={newText => setText(newText)}
      />
      <Button
            title="Editar Video"
            onPress={() => {


                var URL = "http://192.168.0.3:3000/updateVideo";
                var headers = {
                  'Content-Type': 'application/json'
                };
                
                var Data ={
                  idVideo: video.video,
                  nombreVideo: text
                };
            
                fetch(URL,{
                  method:'POST',
                  headers:headers,
                  body: JSON.stringify(Data) //convert data to JSON
                })
                .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
                .then((response)=>{
                  alert("Video se ha editado");       // If data is in JSON => Display alert msg
                }).then(
                  
                )
                .catch((error)=>{
                    alert("Error Occured" + error);
                })
  
              }}
          />

    </View>
  )
}

export default EditarVideo;