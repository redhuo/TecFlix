import { useState, useCallback } from 'react';
import { View, StyleSheet,Button, Alert  } from 'react-native';
import YTSearch from 'youtube-api-search';
import { SearchBar } from 'react-native-elements'
import YoutubePlayer from 'react-native-youtube-iframe';
import VideoList from './VideoList';
import { colors } from '../../colors';
import SearchBarPersonal from './SearchBar';
import DropDownPicker from 'react-native-dropdown-picker';

/* Comnponente que se va a encargar de mostrar la pestana de busqueda avanzada de la aplicacion, 
en este caso se buscan videos de la plataforma de YouTube */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%',
    width: '90%',
  },
  searchBar: {
    backgroundColor: 'transparent'
  },
  inputStyle: {
    backgroundColor: colors.textColor
  },
  textStyle: {
    color: colors.primary
  }
})

const API_KEY = 'AIzaSyDkR3tcNIHKQ_HXUcbjE98B1Sm3LsQwyKE';


const Search = ({ route }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState('')
  const [videos, setVideos] = useState([])

  onPressSearch = term => {
    searchYT(term);
  }

 
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  searchYT = term => {
    setIsLoading(true);
    YTSearch({ key: API_KEY, term }, videos => {
      //console.log(videos);
      setVideos(videos);
    });
  }

  const mandarInfo = () =>{
    var URL = "http://192.168.0.2:3000/api/video";
    var headers = {
      'Content-Type': 'application/json'
    };
    
    var Data ={
      video_id: "234234234",
      name: "jeff"
    };

    fetch(URL,{
      method:'POST',
      headers:headers,
      body: JSON.stringify(Data) //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{
      alert(response[0].Message);       // If data is in JSON => Display alert msg
    })
    .catch((error)=>{
        alert("Error Occured" + error);
    })
  


  };

  const agarrarInfo = () =>{
    var URL = "http://192.168.0.2:3000/api/videonames";
    fetch(URL)
      .then(response => response.json())
      .then(videos => console.log(videos))
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  return (
    <View style={styles.container}>
      <SearchBarPersonal
          loading={isLoading}
          onPressSearch={onPressSearch}
        />
      <View >
        <VideoList videos={videos} />
      </View>
      
      <View>
    </View>
    </View>
    
    
  
  )
}

export default Search;