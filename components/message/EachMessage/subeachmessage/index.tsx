import React,{useState,useEffect} from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ProfilePicture from '../../../profilePicture/index'
import styles from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons'
export default function Index({eachUser}:any) {
    const navigation=useNavigation();
    const onPress= ()=>{
        navigation.navigate("UserMessages")
    }
    const [message,setmessage]=useState('')
    const displaylastmessage =  ()=>{
        // console.log(eachUser.message[1].message)
        setmessage(eachUser?.message[eachUser.message.length-1].message)
    }
    
    useEffect(() => {
        displaylastmessage()
        return () => {
            // cleanup
        }
    }, [])
    return (
        <TouchableOpacity 
        onPress={onPress}
        activeOpacity={.5}>
        <View style={styles.container}>
             <View style={styles.image}>
             <ProfilePicture
         image={'https://a-v2.sndcdn.com/assets/images/hp_creator_image-f3d92e09.jpg'}/> 
            </View>
            <View style={styles.secondContainer}>
            <View style={styles.upper}>
            <View style={styles.header} >
            <Text style={styles.name}> {eachUser.userName}</Text>
            <Text style={styles.handle}> {eachUser.handle}</Text>
            </View>
            <Text style={styles.days}>9 jan</Text>

            </View>
            <View style={styles.preText}>
            <Text style={styles.text}> 
            {/* i saw your love me and i think i dont lolve you again */}
            {!!message && message}
            </Text>
            </View>
            </View>
        </View>
        </TouchableOpacity>
    )
}
