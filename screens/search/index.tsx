import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import TweetButon from '../../components/newtweetButton';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text>erf3r3w</Text>
            {/* <Text>search</Text> */}
            <TweetButon />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      // paddingTop:35,
     justifyContent: 'center',
    },
    
  });
  