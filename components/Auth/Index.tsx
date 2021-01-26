import React from 'react'
import { View,Text,StyleSheet ,SafeAreaView,TouchableOpacity} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import color from '../../constants/Colors'
export default function Index({navigation}) {
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
        paddingTop:50,
        padding:25,
        // justifyContent:'center',
    },
    create:{
        fontSize:22,
        padding:6,
        paddingHorizontal:70,
        borderRadius:50,
        backgroundColor:color.dark.tint,
        color:'#fff',
        fontWeight:'bold',
        alignSelf:'center',
        marginBottom:'88%'


    },
    have:{
        color:'grey',
    },
    login:{
        color:color.dark.tint,

    },
    see:{
        fontSize:35,
        fontWeight:'bold',
        alignSelf:'center',
        marginBottom:'11%'


    },
    logo:{
        alignSelf:'center',
        paddingBottom:280

    }
})