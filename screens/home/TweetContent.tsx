import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import TweetContent from '../../components/TweetContent';
import ProfilePicture from '../../components/profilePicture';
import {TweetType} from '../../types';

import { Feather,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
export type mainProps = {
    Tweet:TweetType,
    } 
export default function TabOneScreen({route}:mainProps) {
   const  {Tweet}=route.params
//    console.log(Tweet)
  return (
    <View style={styles.container}>
        <TweetContent Tweet={Tweet}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
   flex:1
  },
});
