import React from 'react'
import { View,Button,StyleSheet } from 'react-native'
import { DrawerItem
,DrawerContentScrollView
 } from '@react-navigation/drawer'
import {Avatar,Title,Text,Switch,
Caption,Drawer,TouchableRipple
} from 'react-native-paper'

export default function DrawerContent({}) {
    // const navigation = useNavigation()
    return (
        <View style={{flex:1}}>
            <Text>fvr4this</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent:{
        flex:1
    },
    userInfoSection:{
        paddingLeft:20
    },
    title:{
        fontSize:16,
    },

    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom:25,
        borderTopColor:"#f4f4f4",
        borderTopWidth:1,
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16,

    }
})