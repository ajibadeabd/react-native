import React from 'react'
import {Text} from 'react-native'
import styles from './style'
export default function Follow({follows}:any) {
    const Follow =()=>{follows}
    return (<Text onPress={Follow} style={styles.button} >Follow</Text>)
}
