import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import VideoPlayer from './VideoPlayer'
import AddButton from './AddButton';

const VideoListItem = ({ video }) => {
    
    const {
    cardStyle,
    imageStyle,
    contentStyle,
    titleStyle,
    channelTitleStyle,
    descriptionStyle
  } = styles;
  return (
    <View>
      <Card>
       <VideoPlayer videoId={video.idVideoYT} />
      </Card>
    </View>
  );
};

const styles = {
  cardStyle: {
    padding: 5
  },
  contentStyle: {
    flex: 1,
    padding: 5
  },
  titleStyle: {
    fontSize: 12,
    marginBottom: 5
  },
  channelTitleStyle: {
    fontSize: 11,
    color: '#777',
    marginBottom: 5,
    alignSelf: 'flex-end'
  },
  descriptionStyle: {
    fontSize: 11,
    alignSelf: 'center'
  }
};

export default VideoListItem;