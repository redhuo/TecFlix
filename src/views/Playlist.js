import { View, Text } from 'react-native';
import { useState, useCallback } from 'react';
import VideoPlayer from './VideoPlayer'
import PlayListVideoList from './PlayListVideoList';


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