// import React from 'react'
// import { View,Text } from 'react-native'
// import styles from './styles'
// export default function Index() {
//     return (
//         <View style={styles.container}>
//             <Text>dm message</Text>
//         </View>
//     )
// }

import  React,{useState} from 'react';
import { StyleSheet,SafeAreaView,TextInput,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons, Ionicons,  } from '@expo/vector-icons';
import Colors from '../../../../constants/Colors';

import { Text, View } from '../../../Themed';
import ProfilePicture from '../../../profilePicture/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import styles from '../components/tweet/mainContainer/style';
import { useNavigation } from '@react-navigation/native'

export default function NewTweet() {
  const navigation=useNavigation();
    const onPress= ()=>{
        navigation.goBack()
    }
  const onPostTweet=()=>{
    console.log(imageurl)
    console.log(Tweet)
  }
  const [Tweet,setTweet]=useState('')
  const [imageurl,setTimageurl]=useState('')
  return (
      <View style={styles.container}>
    {/* // <TouchableWithoutFeedback  onPress={Keyboard.dismiss}> */}
    <SafeAreaView style={styles.safe} >
    <View style={styles.headContainer}>
    <Ionicons name="arrow-back-sharp" 
    onPress={onPress}
    color={Colors.light.tint} size={26} />
    <ProfilePicture
    
    image={"https://pbs.twimg.com/profile_images/1304122881878765568/IZNHjmPK_bigger.jpg"}
    size={22}
    />
 
      
      </View>
      <MaterialIcons name="info-outline" 
    onPress={onPress}
    color={Colors.light.tint}
     size={26} />
      
      </SafeAreaView>
      </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    paddingVertical:5,
    paddingTop:40,
     justifyContent: 'space-between',
     alignContent:'center',
     alignItems :'center',
    // backgroundColor:'red',

  },
  safe:{

    flexDirection:'row',
    justifyContent: 'space-between',


  },
  headContainer:{
    padding:10,
    flexDirection:'row',
    alignItems: 'center',

    // justifyContent:'space-between',
    // width:"100%",


  }

  
});
