import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { colors } from '../../colors';

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

const Search = ({ route }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState('')
  const [videos, setVideos] = useState([])

  const onChangeText = query => {
    setText(query)
  }

  return (
    <View style={styles.container}>
      <SearchBar
        onChangeText={onChangeText}
        value={text}
        placeholder="What do you want to listen to?"
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.inputStyle}
        inputStyle={styles.textStyle}
        showLoading={isLoading}
      />
    </View>
  )
}

export default Search;