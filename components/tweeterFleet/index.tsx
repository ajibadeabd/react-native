import React from 'react'
import styles from './style'
import { View,Text,TouchableWithoutFeedback } from 'react-native'
import {UserType } from '../../types'
import ProfilePicture from '../profilePicture/index'
import {useNavigation} from '@react-navigation/native'
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export type Userfleet={
    user:UserType;
    
    
  }
export default function Index(props:UserType) {
    const navigation=useNavigation()
    const onPress=()=>{
        navigation.navigate("Fleet",{userId:id})
    }
    const {user:{userName,id,  image}}=props;
    return (
        <TouchableWithoutFeedback 
        onPress={onPress}
        // style={styles.container}
        >
        <View style={styles.container}>

        <View style={styles.image}>
            <ProfilePicture size={70}  image={image}/>
        </View>

            <Text  style={styles.username}>{userName}</Text>
            </View> 

        </TouchableWithoutFeedback>
    )
}
// id: string;
//     userName: string;
//     name: string;
//     image: string;
//     createdAt: string;
//     fleeets: