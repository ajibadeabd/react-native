import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons'
export default function Index() {
    const navigation=useNavigation();
    const onPress= ()=>{
        navigation.navigate("UserDm")
        console.log('object')
    }
    return (
        <View>
            <TouchableOpacity
            activeOpacity={0.6}
             style={styles.button}
              onPress={onPress}>
<MaterialCommunityIcons 
name="email-send-outline" 
size={24} color={"#fff"}/>
             
            </TouchableOpacity>
            
        </View>
    )
}
