import React from 'react'
import { View,Text,TouchableOpacity,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import Picture from '../../profilePicture/index'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '../../../constants/Colors';

export default function Index({show,debo}) {
    const navigation=useNavigation();
    const onPress= ()=>{
        navigation.navigate("NewTweet")
    }
    return (
           <View style={styles.notificationContainer}>
           <MaterialCommunityIcons size={30} color={Colors.light.tint} name={"star-four-points-outline"}/>
          

          <View style={styles.Allcontainer}>
          <Picture
          size={28}
          image={'https://pbs.twimg.com/profile_images/1250882162263547919/U0QTPtKn_400x400.jpg'
        }
          />
          <Text style={styles.Recommended}>Recommended For You</Text>
         
         {show && 
          <Image style={styles.image} source={{uri:
            'https://pbs.twimg.com/profile_images/1250882162263547919/U0QTPtKn_400x400.jpg'
            
            }}/>}
         {debo? <Text>Debo broke my heart after 13th abortion</Text>:
         
          <Text style={styles.RecommendedBody}>
              {/* Recommended For You */}
              Lorem ipsum dolor sit amet consectetur adipisicing
               elit. Quibusdam iusto quia nesciunt, mollitia ex
              
              </Text>}

          </View>
          
          
           {/* <MaterialCommunityIcons size={30} color={Colors.light.tint} name={"star-four-points-outline"}/> */}
           </View>
    )
}
