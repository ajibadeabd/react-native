import React from 'react'
import { Image ,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'


export type profilePictureprops={
    image?:string,
    size?:number,
    toggle?:boolean,
}

export type navigationprops={
    useNavigation:undefined,
}
export default function Index({image,size=50,toggle}:profilePictureprops) {
    const navigation=useNavigation();
    const Toggle=()=>{
       {toggle &&  navigation.toggleDrawer<navigationprops>()}

    }

    return (
        <TouchableOpacity activeOpacity={0.7} 
        onPress={Toggle}
        >


        <Image source={{uri: image || ''}}
        style={{width:size,height:size,borderRadius:size}}
        />
        </TouchableOpacity>

    )
}
