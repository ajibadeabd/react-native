import React,{useEffect} from 'react';
import { StyleSheet,Image } from 'react-native';
import styles from './style';
import Footer from '../tweet/mainContainer/footer';

import { Text, View } from '../../components/Themed';
import ProfilePicture from '../../components/profilePicture';
import { TweetType } from '../../types'

import { Feather,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
export type mainProps = {
    Tweet:TweetType,
    }
export default function Index(props:mainProps) {
    // const {user}=route.params
    const {Tweet}= props
    useEffect(() => {
        console.log(Tweet)
        return () => {
        }
    }, [])
  return (
    <View style={styles.container}>
        <View style={styles.user}>
  <ProfilePicture
         size={60} 
         image={Tweet.image}/> 
  
        <View style={styles.TweetContent}>
            <View >

  <Text style={{color:'grey'}}>{Tweet.user.name}</Text>
  <Text style={{color:'grey'}}>@kordfootwear</Text>
  </View>
  <Feather name="more-horizontal" size={24} color="black" />
       
    </View>
    </View>
        <Text style={styles.TweetBody}>
        Approach me if i will know it l v
        </Text>
        <Image
        style={styles.image}
          source={{uri:'https://a-v2.sndcdn.com/assets/images/hp_creator_image-f3d92e09.jpg'}}
          />
        
      
        
    </View>

  );
}
