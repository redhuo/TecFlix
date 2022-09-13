import { View, Text } from 'react-native';
import { useState, useCallback } from 'react';
import VideoPlayer from './VideoPlayer'
import PlayListVideoList from './PlayListVideoList';

/* Component que actua como la interfaz del playlist de la aplicacion,
se van a mostrar todas las caciones de la playlist */

const Playlist = ({ route }) => {
  const videos = route.params;
  console.log(JSON.stringify(videos.videos))
  return (
    <View>
      <PlayListVideoList videos={videos.videos} />
    </View>
  )
}

export default Playlist;