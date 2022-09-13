import React from 'react';
import { ScrollView, View } from 'react-native';
import VideoListItem from './VideoListItem';

/* Componente que va a mostrar la lista de todos los videos de la busqueda avanzada con su respectiva informacion */

const VideoList = ({ videos }) => {
  const videoItems = videos.map(video => (
    <VideoListItem
      key={video.etag}
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