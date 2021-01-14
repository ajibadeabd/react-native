import React from 'react'
// import styles from './style'
import { View,Text,FlatList } from 'react-native'
import {UserType } from '../../types'
import userwithfleet from '../../jsonData/userFleet'
import TweeterFleet from '../tweeterFleet'

export type Userfleet={
    user:UserType;
    
    
  }
export default function Index() {
    return (
        // <View style={styles.container}>
        <View >
        <FlatList
        data={userwithfleet}
        renderItem={({item})=><TweeterFleet user={item}/>  }
        horizontal
        showsHorizontalScrollIndicator={false}
        />
        </View>
    )
}
