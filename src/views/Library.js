import { View, StyleSheet } from 'react-native';
import { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import PlaylistList from '../components/PlaylistList';

/* Componente que se va a encargar de mostrar las librerias de usuario*/

var tipos;
var URL = "http://192.168.0.3:3000/bibliotecaTipos";
    var headers = {
      'Content-Type': 'application/json'
    };
    
    var Data ={
      idUsuario: "9"
    };

  fetch(URL,{
    method:'POST',
    headers:headers,
    body: JSON.stringify(Data) //convert data to JSON
  })
  .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
  .then(data => tipos = data) 
  .catch((error)=>{
      alert("Error Occured" + error);
  })
console.log(tipos);
const data = [
  {
    id: 1,
    name: 'Favorites',
    songs: 15,
  },
  {
    id: 2,
    name: 'Rock',
    songs: 30,
  },
  {
    id: 3,
    name: 'Rap',
    songs: 15,
  },
  {
    id: 4,
    name: 'Salsa',
    songs: 30,
  }
]

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flex: 1,
    margin: '5%',
  },
})

const Library = ({ route }) => {
  const [videos, setVideos] = useState([])

  const navigation = useNavigation()

  const onPress = playlist => {
    var URL = "http://192.168.0.3:3000/bibliotecaVideos";
    var headers = {
      'Content-Type': 'application/json'
    };
    
    var Data ={
      nombre: "rock"
    };

  fetch(URL,{
    method:'POST',
    headers:headers,
    body: JSON.stringify(Data) //convert data to JSON
  })
  .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
  .then((response) =>{
    setVideos(response)
    //console.log(videos)
    
  })
  .catch((error)=>{
      alert("Error Occured" + error);
  })
    navigation.navigate('Playlist', {videos: videos})
  }

  return (
    <View style={styles.container}>
      <PlaylistList
        data={data}
        onPress={onPress}
      />
    </View>
  )
}

export default Library;