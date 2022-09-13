import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

/* Componente que va a servir como la barra de busqueda en la busqueda avanzada */

class SearchBar extends Component {
  state = { term: '' };

  render() {
    const {
      containerStyle,
      searchTextStyle,
      buttonStyle
    } = styles;

    return (
      <View style={containerStyle}>
        <TextInput
          style={searchTextStyle}
          onChangeText={term => this.setState({ term })}
          value={this.state.term}
        />
        <Button
          buttonStyle={buttonStyle}
          title={this.props.loading ? 'Loading...' : 'Search'}
          onPress={() => this.props.onPressSearch(this.state.term)}
        />
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
  searchTextStyle: {
    flex: 1,
    backgroundColor: 'white'
  },
  buttonStyle: {
    height: 40,
    marginBottom: 8
  }
};


export default SearchBar;