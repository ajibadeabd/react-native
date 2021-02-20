
import  React,{useState} from 'react';
import { StyleSheet,SafeAreaView,TextInput,TouchableWithoutFeedback, Keyboard,StatusBar} from 'react-native';
import CheckBox  from '@react-native-community/checkbox';
import { MaterialIcons,AntDesign, Feather,Ionicons,  } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { Text, View } from '../../Themed';
import ProfilePicture from '../../profilePicture/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
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
  const [toggleCheckBox, setToggleCheckBox] = useState(true)

  return (
   <View style={styles.container}>
       {/* <Text>experience</Text> */}
       <View style={styles.header}>

       <TouchableWithoutFeedback
        onPress={onPress}>
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

    <View style={{padding:"5%"}}>
        <Text
        style={{
            fontWeight:'bold',
            fontSize:35,
            paddingBottom:'15%',

    
    }}
        >Customise your experience</Text>

        <Text
        style={{
            fontWeight:'bold',
            paddingBottom:'5%',
            fontSize:24,

    
    }}>Track where you see  Twitter content acress the web</Text>
       <View style={{
           flexDirection:'row',
           alignItems:'center',
        //    alignItems:'center',
        justifyContent:'space-between',
        // width:"85%"
           
           }}>
       <View
       style={{
           width:'91%',
        //    color:"#fff",

       }}
       >
       <Text style={{fontSize:16,
        color:'grey',
    }}>Twitter uses   this data to personalise your experience.
            This web browsing history will never be stored with your name,email,or phone number</Text>

           </View> 
<View>
<CheckBox
  disabled={false}
  
  value={toggleCheckBox}
//   onClick={()=>{console.log('object')}}
  onValueChange={(newValue) =>{ setToggleCheckBox(!toggleCheckBox);console.log('object')}}
/>    
</View>



       </View>
       <Text
style={{fontSize:16,
    color:'grey',
    width:'100%',
    

    marginTop:"10%",
}}>
     For more details about these settings,visit the  

     <Text
     style={{fontSize:16,
        color:Colors.dark.tint,
        width:'100%',
    
        // marginBottom:"20%",
    }}> Help Center
     </Text>
 </Text> 

    </View>
    <Text

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


  )
}

// const styles = StyleSheet.create({
 

  
// });
