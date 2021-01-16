import  React,{useState} from 'react';
import { StyleSheet,SafeAreaView,TextInput,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import { Text, View } from '../components/Themed';
import ProfilePicture from '../components/profilePicture/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import styles from '../components/tweet/mainContainer/style';
import { useNavigation } from '@react-navigation/native'

export default function NewTweet(p) {
  const navigation=useNavigation();
  console.log(p)
  return (
    <View style={styles.container}>
    <Text >kjkhj</Text>
    </View>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    paddingTop:30,
    alignItems: 'flex-start',
    //  justifyContent: 'center',
    // backgroundColor:'#fff',
     color:'black',
  },

  
});
