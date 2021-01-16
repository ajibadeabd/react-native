import React from 'react'
import { Text,View,StyleSheet } from 'react-native'
import MainContainer from './mainContainer/index'
import LeftContainer from './leftContainer/index'
import {TweetType} from '../../types'
// import {UserType} from '../../types'
import style from './style'
import { useNavigation } from '@react-navigation/native'

// import style from 'nav'
import { TouchableOpacity,TouchableWithoutFeedback } from 'react-native-gesture-handler'

 export  type TweetProps={
     Tweet:TweetType
 }
export default function Index({Tweet}:TweetProps) {
const navigation=useNavigation();

    const onPress=()=>{
        navigation.navigate("TweetContent",{
            Tweet:Tweet
          })
    }
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={style.container}>
            <LeftContainer user={Tweet.user} />
            <MainContainer tweet={Tweet}/>
        </View>
        </TouchableWithoutFeedback>
    )
}