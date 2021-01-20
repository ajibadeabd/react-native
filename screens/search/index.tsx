// import { View,Text,StyleSheet } from 'react-native'
import TweetButon from '../../components/newtweetButton';

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import HomeSearch from '../../components/Search/HomeSearch';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
    <HomeSearch/>
            <TweetButon />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightgrey',

    // alignItems: 'center',
  },
  
});
