
import  React,{useState} from 'react';
import { StyleSheet,SafeAreaView,TextInput,TouchableWithoutFeedback,
  
     Keyboard } from 'react-native';
     
// import {AsyncStorage} from "react-native-community/async-storage"    
import { MaterialIcons, AntDesign,Feather,Ionicons,  } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { Text, View } from '../../Themed';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';

export interface Props {
  name: string;
}
//  function NewTweet() {
  const  NewTweet: React.FC<Props> = (props) => {
    // const  NewTweet= (props) => {
  const navigation=useNavigation();
    const onPress= ()=>{
        // navigation.goBack()
        console.log('object')
    }
    const regWith= ()=>{
      let reqWith = validator?email:phoneNumber
      setWithReg(reqWith)
    
  }
  const onPostTweet=()=>{
  }
  const [name,setName]=useState('')
  const [withReg,setWithReg]=useState('')
  
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
  const [validator,setValidator]=useState(true)
  const load =async ()=>{
    await AsyncStorage.setItem('user','user');

    let getUser=await AsyncStorage.getItem('user')
    if(getUser)
    console.log(getUser)
    return getUser
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>
    <View style={styles.headContainer}>
        <TouchableWithoutFeedback
        onPress={onPress}>
        <Ionicons name="arrow-back-sharp" 
    style={{marginRight:5}}
    onPress={()=>{
            navigation.navigate('Experience')
          }}
    color={Colors.light.tint} size={28} />
        </TouchableWithoutFeedback>
    
    
    {/* <View style={styles.logo}> */}
    <TouchableWithoutFeedback>
    <AntDesign name="twitter" size={28} color={Colors.dark.tint} />
    </TouchableWithoutFeedback>
      </View>
      <View style={styles.body}>
          <Text style={styles.create}>Login to Twitter  </Text>
          <TextInput 
           selectionColor={Colors.dark.tint} 
           onChangeText={(text)=>{setName(text)}}
           value={name}
          //  selectionColor={Colors.dark.tint} 
          //  underlineColorAndroid={Colors.dark.tint} 
           style={styles.input} placeholder='phone number,Email address or username'/>
    
          <TextInput 
          onChangeText={(text)=>{setPassword(text)}}
          value={password}
           style={styles.input} placeholder='password'/>
      </View>
    
    
      <Text
    onPress={load }

style={{
    color:'#fff',
    backgroundColor:Colors.dark.tint,
    padding:"1.4%",
    paddingHorizontal:"3.4%",
    fontSize:15,
    fontWeight:'bold',
    position:'absolute',
    bottom:12,
    right:12,
    borderRadius:40
}}>
    Login
</Text>
      <Text  
      
      >
        {/* {load()} */}
      </Text>
      </View>
    </TouchableWithoutFeedback>


  )
}

export default NewTweet
// const styles = StyleSheet.create({
 

  
// });
