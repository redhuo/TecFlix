import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import AddPlayListButton from './AddPlayListButton';

/*Componente que se va a encargar de ingresar la informacion de la nueva playlist a la aplicacion */
class NewPlaylist extends Component {
  state = { term: '' };
  render() {
    const {
      containerStyle,
      searchTextStyle,
      nombre
    } = styles;

    return (
      <View style={containerStyle}>
        <TextInput
          style={searchTextStyle}
          onChangeText={term => this.setState({ term })}
          value={this.state.term}
        />
        <AddPlayListButton nombre={this.state.term}  />
      </View>
    );
  }
}


const styles = {
  containerStyle: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row'
  },
  containerStyle2: {
    marginLeft: 50,
    marginRight: 50,
    flexDirection: 'row'
  },
  searchTextStyle: {
    marginLeft: 50,
    marginRight: 50,
    elevation: 2,
    paddingTop: 5,
    paddingBottom: 10,
    height: 60,
    marginTop: 0,
    borderTopWidth: 0,
    flex: 1,
    backgroundColor: 'white'
  },
  buttonStyle: {
    height: 40,
    marginBottom: 8
  },
  baseText: {
    height: 200,
    fontWeight: 'bold'
  },
  innerText: {
    color: 'white'
  }
};


export default NewPlaylist;