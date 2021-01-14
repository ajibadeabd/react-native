import React from 'react'
import { View,Text, } from 'react-native'
import {UserType,FleetType } from '../../../types'
// import userFleet from '../../jsonData/userFleet'
export type Subfleet={
    user:UserType;
    Fleet:FleetType
}
export default function FleetScreen() {
    return (
        <View>
            <Text>fleet screen</Text>
        </View>
    )
}
