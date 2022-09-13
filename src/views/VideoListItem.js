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
  const {
    title,
    channelTitle,
    description,
    thumbnails: { medium: { url } }
  } = video.snippet;
  return (
    <View>
      <Card>
      
       <VideoPlayer videoId={video.id.videoId} />

        <View style={contentStyle}>
          <Text style={titleStyle}>
            {title}
          </Text>
          
          <Text style={channelTitleStyle}>
            {channelTitle}
          </Text>

          <Text style={descriptionStyle}>
            {description}
          </Text>
          <AddButton title={title} canal={channelTitle} videoId={video.id.videoId} />
        </View>
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