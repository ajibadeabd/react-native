
import  React,{useState} from 'react';
import { StyleSheet,SafeAreaView,TextInput,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons, Feather,Ionicons,  } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { Text, View } from '../../Themed';
import ProfilePicture from '../../profilePicture/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container} >
    {/* // <TouchableWithoutFeedback  onPress={Keyboard.dismiss}> */}
    <SafeAreaView style={styles.safe} >
    <View style={styles.headContainer}>
    <Ionicons name="arrow-back-sharp" 
    style={{marginRight:5}}
    onPress={onPress}
    color={Colors.light.tint} size={26} />
    <View>

    <ProfilePicture
    image={"https://pbs.twimg.com/profile_images/1304122881878765568/IZNHjmPK_bigger.jpg"}
    size={32}
    /><Text style={{fontSize:19,fontWeight:'bold',marginTop:5}}>kord</Text>
    </View>
 
      
      </View>
      <MaterialIcons  name="info-outline" 
    onPress={onPress}
    color={Colors.light.tint}
     size={26} />
      
      </SafeAreaView>
      <View style={styles.body}>
     
      </View>
      <View  style={styles.send}>
      <MaterialIcons name="perm-media" style={styles.media}  size={28} color={Colors.dark.tint} />
        <View style={styles.gif}>
        <MaterialIcons name="gif" size={18} color={Colors.dark.tint} />

        </View>
      <TextInput style={styles.textarea}>
  
      </TextInput >
<Feather name="send" size={24} color={Colors.dark.tint} />
      </View>
      </View>
    </TouchableWithoutFeedback>


  )
}

// const styles = StyleSheet.create({
 

  
// });
