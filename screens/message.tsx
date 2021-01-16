import React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import TweetData from '../jsonData/index';
import { Text, View } from '../components/Themed';
import TweetContainer from '../components/tweet/index';
import Feed from '../components/feed/index';
import MessageButon from '../components/message/messageButton/index';
// import MessageButon from '../components/message/messageButton/index';
import MessageScreen from '../components/message/messageScreen';
// import TweeterFleetlist from '../components/tweeterFleetlist';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
    <MessageScreen/>
    <MessageButon/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
//     // paddingTop:35,
   justifyContent: 'center',
  },
  
});
