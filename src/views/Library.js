import { View, StyleSheet } from 'react-native';
import PlaylistList from '../components/PlaylistList';

const data = [
  {
    id: 1,
    name: 'Favorites',
    songs: 15,
  },
  {
    id: 2,
    name: 'Hip-hop',
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

  return (
    <View style={styles.container}>
      <PlaylistList
        data={data}
      />
    </View>
  )
}

export default Library;