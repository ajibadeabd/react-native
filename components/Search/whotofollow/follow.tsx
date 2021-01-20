import React from 'react'
import { View,Text,Button,TouchableOpacity,ScrollView} from 'react-native'
import styles from './styles'
import color from '../../../constants/Colors'
import Followbotton from '../../followbotton'
import ProfilePicture from '../../profilePicture/index'
export default function HomeSearch() {
    const follow= ()=>{
        console.log('done')
    }
    return (
      
               <View style={styles.followcontainer}>
               <ProfilePicture  image={'https://pbs.twimg.com/profile_images/1250882162263547919/U0QTPtKn_400x400.jpg'}/>
               <View style={styles.rightpath}>
               <View style={styles.uppercontainer}>
                   <View style={styles.user}>
                       <Text style={styles.username}> oyin </Text>
                       <Text style={styles.userhandle}>@kordfootwear</Text>
                   </View>
                 {/* <Followbotton follows={follow} /> */}
                 <TouchableOpacity >
                   <Text onPress={follow} style={styles.button} >Follow</Text>
                 </TouchableOpacity>


               </View>
               <Text  style={styles.textbody}>
                   
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laborum cum nulla magni suscipit ex facere eos asperiores natus nisi dolor iusto rerum possimus, quidem a reprehenderit. Saepe, optio iure.
                 </Text>

               </View>
               </View>
    )
}
