import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { useState, useCallback } from 'react';
import VideoPlayer from './VideoPlayer'
import PlayListVideoList from './PlayListVideoList';
import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    baseText: {
      fontWeight: 'bold'
    },
    innerText: {
      color: 'white'
    }
  });

const NewPlaylist = ({ route }) => {

    const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'white'
  }
});
  return (
    <View>
      <Text style={styles.innerText} > Agregar nueva playlist </Text>
      <TextInput
        onChangeText={onChangeField('email')}
      />
    </View>
  )
}

export default NewPlaylist;