import { View, StyleSheet } from 'react-native';
import PlaylistList from '../components/PlaylistList';

const data = [
  {
    id: 1,
    name: 'Favoritos',
    songs: 15,
  },
  {
    id: 2,
    name: 'Rancheras',
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

  return (
    <View style={styles.container}>
      <PlaylistList
        playlist={data}
      />
    </View>
  )
}

export default Library;