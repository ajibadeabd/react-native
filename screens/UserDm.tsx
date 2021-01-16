import React,{useEffect} from 'react'
import { View,Text, } from 'react-native'

export default function FleetScreen({navigation,route}:any) {
    useEffect(() => {
        // effect
        // console.log(route.params)
        return () => {
            // cleanup
        }
    }, [])
    return (
        <View>
            <Text>fleet 
                rt4vvrvveen</Text>
        </View>
    )
}
