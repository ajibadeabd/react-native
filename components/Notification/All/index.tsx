import React from 'react'
import { View,Text,TouchableOpacity ,ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import Picture from '../../profilePicture/index'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '../../../constants/Colors';
import MentionComponent from './mentionComponent';

import NewtweetButton from '../../newtweetButton'; 
export default function Index() {
    const navigation=useNavigation();
    const onPress= ()=>{
        navigation.navigate("NewTweet")
    }
    return (
        <View style={{flex:1}}>

        <View style={styles.container}>
            <ScrollView>
          <MentionComponent show={true}/>
          <MentionComponent show={false}/>
          <MentionComponent  debo show={true}/>
          <MentionComponent show={false}/>
          <MentionComponent show={true}/>
          <MentionComponent show={false}/>
          <MentionComponent show={false}/>

          </ScrollView>

        </View>
<NewtweetButton/>

        </View>
    )
}
