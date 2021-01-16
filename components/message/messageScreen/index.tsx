import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import MessageButton from '../messageButton/index'
import EachMessage from '../EachMessage/index'
import { useNavigation } from '@react-navigation/native'
// import styles from './style'
export default function Index() {
    const navigation=useNavigation();
    const onPress= ()=>{
        navigation.navigate("Root")
    }
    return (
        <View style={{width:'100%',height:'100%'}}>
<EachMessage/>
            
        </View>
    )
}
