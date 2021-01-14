import React from 'react'
import {EvilIcons,Feather,AntDesign} from '@expo/vector-icons'
import { Text,View,StyleSheet } from 'react-native'
import { TweetType } from '../../../../types'
// import styles from '../style'
import style from './styles'
import styles from '../style'



export type mainProps = {
tweet:TweetType,
}
export default function Index({tweet}:mainProps) {
    return (
        <View style={style.container}>
    {/* <Ionicons  /> */}
    <View style={style.iconContainer}>
        <Feather name={"message-circle"} size={20} color={'grey'}/>
        <Text  style={style.number}>{tweet.NofComments}</Text>
    </View>
    <View style={style.iconContainer}>
        <EvilIcons name={"retweet"} size={30} color={'grey'}/>
        <Text  style={style.number}>{tweet.NofRetwwet}</Text>
    </View>
    <View style={style.iconContainer}>
        <AntDesign name={"hearto"} size={20} color={'grey'}/>
        <Text style={style.number}>{tweet.NofLikes}</Text>
            
    </View>
    <View style={style.iconContainer}>
        <EvilIcons name={"share-google"} size={28} color={'grey'}/>
    </View>
        </View>
    )
}
//ABOUT BUILD VERSION