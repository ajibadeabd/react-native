import  React,{useState} from 'react';
import { StyleSheet,SafeAreaView,TextInput,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import { Text, View } from '../components/Themed';
import ProfilePicture from '../components/profilePicture/index';
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
    <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
    <View style={styles.headContainer}>
    <AntDesign name="close" 
    onPress={onPress}
    color={Colors.light.tint} size={20} />

 
      <TouchableOpacity style={styles.botton} onPress={onPostTweet}>
        <Text style={styles.buttonText}>Tweet</Text>
      </TouchableOpacity>
      </View>
    <View style={styles.newtweetcontainer}>
    <ProfilePicture
      image={'https://a-v2.sndcdn.com/assets/images/hp_creator_image-f3d92e09.jpg'}
       />

      
       <View     style={styles.containerinput}>
       <TextInput 
      // multiline={true}
      value={Tweet}
      numberOfLines={3}
      //  maxHeigth
       style={styles.tweetinput}
      onChangeText={(e)=>{setTweet(e)}}

       placeholder={"what's happening"}/>
       <TextInput 
      value={imageurl}
      onChangeText={(e)=>{setTimageurl(e)}}

       style={styles.imageinput}
       
       placeholder={"url optional"}/>

    </View> 
    </View>
     </SafeAreaView>
    </TouchableWithoutFeedback>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    paddingTop:30,
    // alignItems: 'flex-start',
    //  justifyContent: 'center',
    backgroundColor:'#fff',
     color:'black',
  },
  buttonText:{
    paddingHorizontal:20,
    paddingVertical:10, 
    color:'white',
    fontWeight:'bold', 
    fontSize:16,
  },
  imageinput:{
  },
  tweetinput:{
    fontSize:18,
  },
  newtweetcontainer:{
    flexDirection:'row',
    margin:'5%'
  },
  containerinput:{
    marginLeft:10, 
  },
  botton:{
    backgroundColor:Colors.light.tint,
    borderRadius:30,
  },
  headContainer:{
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-between',
    width:"100%",


  }

  
});
