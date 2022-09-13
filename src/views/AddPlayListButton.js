import React from 'react';
import { Button } from 'react-native-elements';

/*
Boton que se encarga de anadir una nueva playlist a la aplicacion
*/
const AddPlayListButton = ({nombreBiblioteca}) => {

return(
  <Button
  raised
  title="Añadir"
  containerViewStyle={{ height: 60,
    marginBottom: 8 }}
  backgroundColor="#E62117"
  onPress={() => {


    var URL = "http://192.168.100.9:3000/insertBiblioteca";
    var headers = {
      'Content-Type': 'application/json'
    };
    
    var Data ={
        idbibliotecaUsuario: null,
        idUsuario: null,
        idVideoYT: null,
        nombre: nombreBiblioteca
      };

    fetch(URL,{
      method:'POST',
      headers:headers,
      body: JSON.stringify(Data) //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{
      alert("Playlist añadida");       // If data is in JSON => Display alert msg
    }).then(
      
    )
    .catch((error)=>{
        alert("Error Occured" + error);
    })

  }}
/>
)
}

export default AddPlayListButton;