import { StyleSheet } from 'react-native'
import color from '../../constants/Colors'

const styles = StyleSheet.create({
   
    button:{
        color:color.light.tint,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:color.light.tint,
        borderRadius:14,
        margin:5,
        padding:3,
        paddingHorizontal:20,
        fontSize:18,
        fontWeight:'bold'
    },
    textbody:{
        marginVertical:3

    },
    
  });

  export default styles
  