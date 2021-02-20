
import  React,{useState} from 'react';
import { StyleSheet,SafeAreaView,TextInput,TouchableWithoutFeedback,
    TouchableOpacity,
     Keyboard } from 'react-native';
     
import { MaterialIcons, AntDesign,Feather,Ionicons,  } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { Text, View } from '../../Themed';
import styles from './style';
import { useNavigation } from '@react-navigation/native'

export default function NewTweet() {
  const navigation=useNavigation();
    const onPress= ()=>{
        // navigation.goBack()
        console.log('object')
    }
  const onPostTweet=()=>{
    console.log(imageurl)
    console.log(Tweet)
  }
  const [Tweet,setTweet]=useState('')
  const [imageurl,setTimageurl]=useState('')
  const [validator,setValidator]=useState(true)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>
    <View style={styles.headContainer}>
        <TouchableWithoutFeedback
        onPress={onPress}>
        <Ionicons name="arrow-back-sharp" 
    style={{marginRight:5}}
    onPress={()=>{

      navigation.goBack()
    }}
    color={Colors.light.tint} size={28} />
        </TouchableWithoutFeedback>
    
    
    {/* <View style={styles.logo}> */}
    <TouchableWithoutFeedback>
    <AntDesign name="twitter" size={28} color={Colors.dark.tint} />
    </TouchableWithoutFeedback>
      </View>
      <View style={styles.body}>
          <Text style={styles.create}>Create your account</Text>
          <TextInput 
           selectionColor={Colors.dark.tint} 
          //  selectionColor={Colors.dark.tint} 
          //  underlineColorAndroid={Colors.dark.tint} 
           style={styles.input} placeholder='Name'/>
          <TextInput style={styles.input} placeholder={validator?'Email':"Phone number"}/>

          <TextInput  style={styles.input} placeholder='Date of birth'/>
      </View>
      <View style={styles.instead}>
          <Text 
          onPress={()=>{setValidator(!validator)}}
          style={styles.insteadInput1}>{!validator?'Use Email address instead':"Use  phone number instead"}
            </Text>
          <Text style={styles.insteadInput2}
          onPress={()=>{
            navigation.navigate('Experience')
          }}
          >Next</Text>
         
      </View>
    
     
      
      </View>
    </TouchableWithoutFeedback>


  )
}

// const styles = StyleSheet.create({
 

  
// });
