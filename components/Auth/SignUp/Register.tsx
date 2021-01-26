
import  React,{useState} from 'react';
import { StyleSheet,SafeAreaView,TextInput,TouchableWithoutFeedback,
    TouchableOpacity,
     Keyboard } from 'react-native';
import { MaterialIcons, AntDesign,Feather,Ionicons,  } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { Text, View } from '../../Themed';
import styles from './styles';
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
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>
    <View style={styles.headContainer}>
        <TouchableWithoutFeedback
        onPress={onPress}>
        <Ionicons name="arrow-back-sharp" 
    style={{marginRight:5}}
    color={Colors.light.tint} size={28} />
        </TouchableWithoutFeedback>
    
    
    {/* <View style={styles.logo}> */}
    <TouchableWithoutFeedback>
    <AntDesign name="twitter" size={28} color={Colors.dark.tint} />
    </TouchableWithoutFeedback>
      </View>
      <View style={styles.body}>
          <Text style={styles.create}>Create your account</Text>
      </View>
    
     
      
      </View>
    </TouchableWithoutFeedback>


  )
}

// const styles = StyleSheet.create({
 

  
// });
