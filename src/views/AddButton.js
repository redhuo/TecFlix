import React from 'react';
import { Button } from 'react-native-elements';

/*
Boton que se encarga de anadir canciones a las playlist
*/
const AddButton = ({title,canal, videoId }) => {

return(
  <Button
  raised
  title="Añadir a playlist"
  icon={{ name: 'play-arrow' }}
  containerViewStyle={{ marginTop: 10 }}
  backgroundColor="#E62117"
  onPress={() => {


    var URL = "http://192.168.0.3:3000/insertVideo";
    var headers = {
      'Content-Type': 'application/json'
    };
    
    var Data ={
      "idVideoYT": videoId,
      "nombreVideo": title,
      "canal": canal,
      "imagen": "",
      "duracion": "30:00min"
    };

    fetch(URL,{
      method:'POST',
      headers:headers,
      body: JSON.stringify(Data) //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{
      alert("Video anadido");       // If data is in JSON => Display alert msg
    }).then(
      
    )
    .catch((error)=>{
        alert("Error Occured" + error);
    })

    //////////////////////////////////////////////

    var URL2 = "http://192.168.0.3:3000/insertBiblioteca";
    var headers = {
      'Content-Type': 'application/json'
    };
    
    var Data2 ={
      idbibliotecaUsuario: "2",
      idUsuario: "9",
      idVideoYT: videoId,
      nombre: "rock"
    };

    fetch(URL2,{
      method:'POST',
      headers:headers,
      body: JSON.stringify(Data2) //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{
      alert("Video anadido a la biblioteca");       // If data is in JSON => Display alert msg
    })
    .catch((error)=>{
        alert("Error Occured" + error);
    })
   
  
  }}
/>
)
  
  
}

export default AddButton;