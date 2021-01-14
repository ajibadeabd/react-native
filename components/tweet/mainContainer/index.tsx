import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { Text,View,Image,StyleSheet } from 'react-native'
import { TweetType } from '../../../types'
// import styles from '../style'
import style from './style'
import Footer from './footer/index'
import styles from './style'
import moment from 'moment'




export type mainProps = {
tweet:TweetType,
}
export default function Index({tweet}:mainProps) {
    return (
        <View style={style.container}>
        <View style={style.tweetHeaderContainer}>
        <View style={style.tweetHeaderContainerText}>

                <Text style={style.name}>{tweet.user.name}</Text>
                <Text style={style.userName}>@{tweet.user.userName}</Text>
                <Text style={style.createdAt}>
                {moment(tweet.createdAt).fromNow()}
                    </Text>
                {/* <Text style={style.createdAt}>15s</Text> */}
            </View>
               
                <Ionicons name={"chevron-down"} color="grey" size={16} />
            </View>
            <View style={style.content}>
                <Text>{tweet.content}</Text>
              {!!tweet.image && 
               <Image style={styles.image} source={{uri:tweet.image}}/>}
            </View>
            <Footer tweet={tweet}/>
        </View>
    )
}
