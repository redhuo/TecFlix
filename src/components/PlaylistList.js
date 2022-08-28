import { FlatList, SafeAreaView, StyleSheet } from "react-native"
import PlaylistElement from "./PlaylistElement"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
})

const PlaylistList = ({ route, data, onPress }) => {

  const renderItem = ({ item }) => {
    return (
      <PlaylistElement
        playlist={item}
        onPress={() => onPress(item)}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  )
}

export default PlaylistList