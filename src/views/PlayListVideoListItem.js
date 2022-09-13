import React from 'react';
import { View, Text, Image , Button } from 'react-native';
import { Card } from 'react-native-elements';
import VideoPlayer from './VideoPlayer'
import AddButton from './AddButton';
import { useNavigation } from '@react-navigation/native';

/* Componente que va mostrar cada elemento dentro de una playlist, desde aqui se va a mostrar el video, el nombre y otra
informacion relevante al video */

const VideoListItem = ({ video }) => {
  const navigation = useNavigation()
    const {
    cardStyle,
    imageStyle,
    contentStyle,
    titleStyle,
    channelTitleStyle,
    descriptionStyle
  } = styles;
  return (
    <View>
      <Card>
       <VideoPlayer videoId={video.idVideoYT} />
       <View style={contentStyle}>
          <Text style={titleStyle}>
            {video.nombreVideo}
          </Text>
          
          <Text style={channelTitleStyle}>
            {video.canal}
          </Text>
          <Button
            title="Borrar Video"
            onPress={() => {


              var URL = "http://192.168.0.3:3000/deleteBiblioteca";
              var headers = {
                'Content-Type': 'application/json'
              };
              
              var Data ={
                idVideo: video.idVideoYT
              };
          
              fetch(URL,{
                method:'POST',
                headers:headers,
                body: JSON.stringify(Data) //convert data to JSON
              })
              .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
              .then((response)=>{
                alert("Video Borrado");       // If data is in JSON => Display alert msg
              }).then(
                
              )
              .catch((error)=>{
                  alert("Error Occured" + error);
              })

            }}
          />
          <Button
            title="Editar Video"
            onPress={() => navigation.navigate('EditarVideo', {video: video.idVideoYT})}
          />
          </View>
      </Card>
  
    </View>
    

    
  );
};

const styles = {
  cardStyle: {
    padding: 5
  },
  contentStyle: {
    flex: 1,
    padding: 5
  },
  titleStyle: {
    fontSize: 12,
    marginBottom: 5
  },
  channelTitleStyle: {
    fontSize: 11,
    color: '#777',
    marginBottom: 5,
    alignSelf: 'flex-end'
  },
  descriptionStyle: {
    fontSize: 11,
    alignSelf: 'center'
  }
};

export default VideoListItem;