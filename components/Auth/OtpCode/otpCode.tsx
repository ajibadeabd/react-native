
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
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>

         <View style={styles.headContainer}>
         <TouchableWithoutFeedback
        >
        <Ionicons name="arrow-back-sharp" 
    style={{marginRight:5}}
    onPress={()=>{

      navigation.goBack()
    }}
    color={Colors.light.tint} size={28} />
        </TouchableWithoutFeedback>
    
    
    <TouchableWithoutFeedback>
    <AntDesign name="twitter" size={28} color={Colors.dark.tint} />
    </TouchableWithoutFeedback>
      </View>
      <Text 
      style={{
          fontSize:32,
          marginVertical:'3%',
          fontWeight:'bold'

      }}
      >We sent you a code </Text>
      <Text
      
      style={{
        fontSize:16,
        marginVertical:'5%',
        color:'grey'
    }}
      >Enter it below to verify +234 809 090 3620 </Text>
      <TextInput
         style={{
            fontSize:16,
            marginVertical:'5%',
            color:'grey',
            borderBottomColor:Colors.dark.tint,
            borderBottomWidth:1
        }}
      placeholder={'Waiting for SMS to arrive...'}/>
      <Text 
         style={{
            fontSize:16,
            marginVertical:'5%',
            color:Colors.dark.tint
        }}>Didn't recieve a text?</Text>
  
  <Text
    onPress={()=>{
        navigation.navigate('Login')}}

style={{
    color:'#fff',
    backgroundColor:Colors.dark.tint,
    padding:"1.4%",
    paddingHorizontal:"3.4%",
    fontSize:15,
    position:'absolute',
    bottom:12,
    right:12,
    borderRadius:40
}}>
    next
</Text>
      </View>
    </TouchableWithoutFeedback>


  )
}

export default NewTweet
// const styles = StyleSheet.create({
 

  
// });
