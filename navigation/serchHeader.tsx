import React from 'react'
import { View,Text,StyleSheet,TextInput} from 'react-native'
export default function SerchHeader() {
    return (
        <View style={styles.container}>
            <TextInput 
      // multiline={true}
    //   value={Tweet}
      numberOfLines={2}
      //  maxHeigth
       style={styles.tweetinput}
    //   onChangeText={(e)=>{setTweet(e)}}

       placeholder={"Search Twitter"}/>
            {/* <Text  style={{color:'red',backgroundColor:'blue'}}>search</Text> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        // flex:1
    },
    tweetinput:{
        borderRadius:47,
        // marginBottom:16,
        // color:'red',
        textAlign:'center',
        backgroundColor:'lightgrey',
    }
})