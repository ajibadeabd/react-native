import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
export default function Index() {
    const navigation=useNavigation();
    const onPress= ()=>{
        navigation.navigate("NewTweet")
    }
    return (
        <View>
            <TouchableOpacity
            activeOpacity={0.6}
             style={styles.button} onPress={onPress}>

                <MaterialCommunityIcons name={"feather"} size={30} color={"#fff"}/>
            </TouchableOpacity>
            
        </View>
    )
}
