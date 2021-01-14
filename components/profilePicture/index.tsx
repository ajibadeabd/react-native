import React from 'react'
import { Image } from 'react-native'


export type profilePictureprops={
    image?:string,
    size?:number,
}
export default function Index({image,size=50}:profilePictureprops) {
    return (
        <Image source={{uri: image || ''}}
        style={{width:size,height:size,borderRadius:size}}
        />
    )
}
