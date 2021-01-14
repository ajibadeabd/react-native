import React from 'react'
import { Text,View,StyleSheet } from 'react-native'
import { UserType } from '../../../types'
import ProfilePicture from '../../../components/profilePicture/index'



export type leftContainerProps = {
    user:UserType

}
export default function Index({user}:leftContainerProps) {
    return (
        <View>
            {/* */}
            <ProfilePicture size={75} image={user.image} />
        </View>
    )
}
