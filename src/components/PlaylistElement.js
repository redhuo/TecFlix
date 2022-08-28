import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { colors } from '../../colors'
import image from '../../assets/albumCover.jpg'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    margin: '5%',
    marginTop: '0%',
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 3,
  },
  title: {
    color: colors.textColor,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    color: colors.secondaryColor
  }
})

const PlaylistElement = ({ route, playlist, onPress }) => {
  const { name = '', songs = '' } = playlist
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
      android_ripple={{ color: colors.secondaryColor }}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={image}
          resizeMode="stretch"
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.text}>{`${songs} ${songs > 1 ? 'songs' : 'song'}`}</Text>
      </View>
    </Pressable>
  )
}

export default PlaylistElement