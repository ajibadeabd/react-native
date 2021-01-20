import React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import TweetData from '../../jsonData/index';
import { Text, View } from '../../components/Themed';
import TweetContainer from '../../components/tweet/index';
import {TopTabParamList} from '../../types';
import MessageButon from '../../components/message/messageButton/index';
import All from '../../components/Notification/All';
import Mention from '../../components/Notification/mention';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const TopTab = createMaterialTopTabNavigator<TopTabParamList>();
export default function TabOneScreen() {
  return (
    // <View style={styles.container}>
    <TopTab.Navigator>
        <TopTab.Screen name="Mention" component={Mention}  />
        <TopTab.Screen name="All" component={All} />
    </TopTab.Navigator>
    //  {/* </View> */}
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'white'
    // flex: 1,
  },
  
});

