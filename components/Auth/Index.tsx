import React from 'react'
import { View,Text,StyleSheet ,SafeAreaView,TouchableOpacity} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import color from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native';

export default function Index() {
const navigation=useNavigation();

    return (
        <View  style={styles.container}>
            <SafeAreaView>
                <View style={styles.logo}>
            <AntDesign name="twitter" size={24} color={color.dark.tint} />
                </View>

            <Text style={styles.see}>See what's happening in the world right now </Text>
            <TouchableOpacity>
            <Text style={styles.create}
            onPress={()=>{
                navigation.navigate('SignUp')
             }}
            >Create account </Text>
            </TouchableOpacity>
          
            <Text style={styles.have}>Have an account already?
                 <Text
                 onPress={()=>{
                    navigation.navigate('Login')
                 }}
                 style={styles.login}>   Login</Text>
                  </Text>



            </SafeAreaView>

        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:'5.9%',
        // paddingTop:2.74,
        // position:'relative'
        // justifyContent:'center',
    },
    create:{
        fontSize:22,
        padding:'1.7%',
        paddingHorizontal:'20%',
        borderRadius:50,
        backgroundColor:color.dark.tint,
        color:'#fff',
        fontWeight:'bold',
        alignSelf:'center',
        // marginBottom:'88%'


    },
    have:{
        color:'grey',
        // bottom:10,
        // left:10,
        paddingTop:"75%"
    },
    login:{
        color:color.dark.tint,

    },
    see:{
        fontSize:35,
        fontWeight:'bold',
        alignSelf:'center',
        marginBottom:'11%',
        marginTop:'71%'



    },
    logo:{
        alignSelf:'center',

    }
})