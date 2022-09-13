import React from 'react';
import { ScrollView, View } from 'react-native';
import VideoListItem from './PlayListVideoListItem';

/* Componente que se va a encargar de crear una lista con todos los videos dentro de la playlist */

const VideoList = ({ videos }) => {
  console.log(videos)
  const videoItems = videos.map(video => (
    <VideoListItem
      key = {video}
      video={video}
    />
    
  ));

  return (
    <ScrollView>
      <View style={style.containerStyle}>
        {videoItems}
      </View>
    </ScrollView>
  );
};

const style = {
  containerStyle: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  }
};

export default VideoList;