
import  React,{useState} from 'react';
import { StyleSheet,SafeAreaView,TextInput,TouchableWithoutFeedback,
    TouchableOpacity,
     Keyboard } from 'react-native';
     
import { MaterialIcons, AntDesign,Feather,Ionicons,  } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { Text, View } from '../../Themed';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'

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
  
  const [dob,setDob]=useState('')
  const [email,setEmail]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
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
          <Text style={styles.create}>Create your account</Text>
          <TextInput 
           selectionColor={Colors.dark.tint} 
           onChangeText={(text)=>{setName(text)}}
           value={name}
          //  selectionColor={Colors.dark.tint} 
          //  underlineColorAndroid={Colors.dark.tint} 
           style={styles.input} placeholder='Name'/>
          <TextInput 
          onChangeText={(text)=>
            {
              {validator?setEmail(text):setPhoneNumber(text)}
              regWith()
              
            
            }}
          value= {validator?email:phoneNumber}
          style={styles.input} placeholder={validator?'Email':"Phone number"}/>

          <TextInput 
          onChangeText={(text)=>{setDob(text)}}
          value={dob}
           style={styles.input} placeholder='Date of birth'/>
      </View>
      <View style={styles.instead}>
          <Text 
          onPress={()=>{setValidator(!validator)}}
          style={styles.insteadInput1}>{!validator?'Use Email address instead':"Use  phone number instead"}
            </Text>
          <Text style={styles.insteadInput2}
          onPress={()=>{
            navigation.navigate('Experience',
            {
              // name:'ll'
              name,dob,
              withReg
            })
          }}
          >Next</Text>
         
      </View>
    
     
      
      </View>
    </TouchableWithoutFeedback>


  )
}

export default NewTweet
// const styles = StyleSheet.create({
 

  
// });
