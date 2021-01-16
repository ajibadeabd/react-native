import React,{useEffect} from 'react';
import { StyleSheet,Image,ScrollView } from 'react-native';
import styles from './style';
import UpperContent from './upperContent';
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
        <ScrollView>
     <UpperContent Tweet={Tweet}/>
        <View>
            <Text style={styles.timeStamp}>  10:15 AM . Jan 15, 2021 . Twitter MediaStudio - LiveCut </Text>
            {/* <Text > */}
                <View style={styles.retweetContainer} >
                <Text style={styles.bold}>2.1k </Text> 
                <Text style={styles.retweet} >Tweet   </Text>
                <Text style={styles.bold}>2.1k </Text> 
                <Text style={styles.retweet} >Retweet   </Text>
                <Text style={styles.bold}>2.1k </Text> 
                <Text style={styles.retweet} >Likes</Text>
                </View>
                <Footer  tweet={Tweet} />

     <UpperContent Tweet={Tweet}/>
     <Footer  tweet={Tweet} />

     
     <UpperContent Tweet={Tweet}/>
     <Footer  tweet={Tweet} />
     
     <UpperContent Tweet={Tweet}/>
     <Footer  tweet={Tweet} />


            {/* </Text> */}
        </View>
        </ScrollView>
    </View>

  );
}
