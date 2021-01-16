import React from 'react'
import { View,Text,TouchableOpacity,FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ProfilePicture from '../../profilePicture/index'
import styles from './style'
import message from '../../../jsonData/dm'
import Submessage from './subeachmessage/index'
import { MaterialCommunityIcons } from '@expo/vector-icons'
export default function Index() {
    const navigation=useNavigation();
    const onPress= ()=>{
        // navigation.navigate("NewTweet")
    }
    return (
        <View style={styles.container}>
           <FlatList
        data={message}
        renderItem={({item})=>
        <Submessage eachUser={item}/> 
     }
        // horizontal
        // showsHorizontalScrollIndicator={false}
        />
            
        </View>
    )
}
