import React from 'react'
import { View,Text,Button,ScrollView} from 'react-native'
import styles from './styles'
import Follow from './follow'
import ProfilePicture from '../../profilePicture/index'
export default function HomeSearch() {
    return (
        <View style={styles.container}>
               <Text style={styles.follow}>who to follow</Text>
               <Follow/>
               <Follow/>
               <Follow/>
               <Follow/>
               <Follow/>
               <Follow/>
               

        </View>
    )
}
