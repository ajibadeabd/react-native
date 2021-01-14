import React from 'react'
import { Text,View,StyleSheet } from 'react-native'
import MainContainer from './mainContainer/index'
import LeftContainer from './leftContainer/index'
import {TweetType} from '../../types'
import {UserType} from '../../types'
import style from './style'

 export  type TweetProps={
     Tweet:TweetType
 }
export default function Index({Tweet}:TweetProps) {
    return (
        <View style={style.container}>
            <LeftContainer user={Tweet.user} />
            <MainContainer tweet={Tweet}/>
        </View>
    )
}
