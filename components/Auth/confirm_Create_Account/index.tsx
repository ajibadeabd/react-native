
import  React,{useState} from 'react';
import { TextInput,TouchableWithoutFeedback,
    TouchableOpacity,Alert,
     Keyboard } from 'react-native';
     
import { MaterialIcons, AntDesign,Feather,Ionicons,  } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { Text, View } from '../../Themed';
import styles from './style';
import { useNavigation } from '@react-navigation/native'
export interface Props {
    route: any;
    enthusiasmLevel?: number;
  }
// export default function NewTweet({route}) {
  const  NewTweet: React.FC<Props> = ({route}) => {
    console.log(route.params.params)
    const{dob,name,withReg} = route.params.params
   

    // console.log(route)
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
  const [validator,setValidator]=useState(true)
  const verify=()=>{
    Alert.alert(
      'Verify phone',
      `we'll text your verification code to ${withReg}. Standard SMS fees may apply.`,
      [
        
        {
          text: 'Edit',
          // onPress: () => console.log('Cancel Pressed'),
          onPress: () => navigation.navigate("SignUp"),
          style: 'cancel'
        },
        { text: 'OK',
        onPress: () => navigation.navigate("OtpCode"),
         }
      ],
      { cancelable: false }
    );
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>
    <View style={styles.headContainer}>
        <TouchableWithoutFeedback
        onPress={onPress}>
        <Ionicons name="arrow-back-sharp" 
    style={{marginRight:5}}
    onPress={()=>{

      navigation.goBack()
    }}
    color={Colors.light.tint} size={28} />
        </TouchableWithoutFeedback>
    
    
    {/* <View style={styles.logo}> */}
    <TouchableWithoutFeedback>
    <AntDesign name="twitter" size={28} color={Colors.dark.tint} />
    </TouchableWithoutFeedback>
      </View>
      <View style={styles.body}>
          <Text style={styles.create}>Create your account</Text>
          <TextInput 
           selectionColor={Colors.dark.tint} 
           onKeyPress={()=>{navigation.navigate('SignUp')
          }}
          //  selectionColor={Colors.dark.tint} 
          //  underlineColorAndroid={Colors.dark.tint} 
           style={styles.input} value={name} placeholder='Name'/>
          <TextInput  value={withReg} 
           onKeyPress={()=>{navigation.navigate('SignUp')
          }}
          style={styles.input} />

          <TextInput 
          value={dob} style={styles.input}
          onKeyPress={()=>{navigation.navigate('SignUp')
        }} placeholder='Date of birth'/>
      </View>
      <View style={styles.instead}>
        {/* <Text> */}
          <Text
          style={{color:'grey',
          fontSize:16,
        // lineHeight: 16,

        }}
          >By Signing up, you agree to the
            <Text 
          style={{color:Colors.dark.tint,
        }}
          >Term of Service</Text> 
          and <Text
          style={{color:Colors.dark.tint,
          }}>Privacy Policy</Text> , including <Text
          style={{color:Colors.dark.tint,
          }}>Cookie Use.</Text>
          Others will be able to find you by email or phone number when provided.  <Text
           style={{color:Colors.dark.tint,
          }}>Privacy Options</Text>  

        </Text>
         
         
      </View>
      <TouchableOpacity activeOpacity={.8}>

      <View
       style={{
        alignItems:'center',
        paddingTop:'6%',
        


       }}
       >
         <Text 
         style={styles.signUp}
        //  }
        onPress={()=>{
          // navigation.navigate("otpCode")
          verify();
          console.log('object')
        }}
        > Sign Up</Text>
      
      </View>
      </TouchableOpacity>

      </View>
    </TouchableWithoutFeedback>


  )
}
export default NewTweet
// const styles = StyleSheet.create({
 

  
// });
