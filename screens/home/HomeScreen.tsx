import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import TweetData from '../../jsonData/index';
import { Text, View } from '../../components/Themed';
import TweetContainer from '../../components/tweet/index';
import Feed from '../../components/feed/index';
import TweetButon from '../../components/newtweetButton';
import TweeterFleetlist from '../../components/tweeterFleetlist';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
    <Feed/>
    <TweetButon/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // paddingTop:35,
   justifyContent: 'center',
  },
  
});
