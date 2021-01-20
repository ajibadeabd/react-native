import { StyleSheet } from 'react-native'
import color from '../../../constants/Colors'

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:9,
        marginTop:5,

        // alignItems: 'center',
    //    justifyContent: 'center'
    backgroundColor:'white',

    },
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
    follow:{
        marginTop:5,
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:10,
        borderBottomWidth:1,
        borderBottomColor:'lightgrey',
        marginBottom:10,
        
    },
    image:{
      borderRadius:13,
      width:"100%",
      resizeMode:'cover',
      height:200,
      marginVertical:10,
      overflow:'hidden',
    },
    trendtitle:{
    fontSize:20,
    borderBottomWidth:1,
    borderBottomColor:'lightgrey',
    // paddingHorizontal:5,
    paddingVertical:15,
    fontWeight:'bold',

    },
    showmore:{
        color:'lightblue',
        margin:5,
        fontSize:18,

    },
    user:{
// margin:6,

    },
    username:{

    },
    userhandle:{ color:'grey'},
    textbody:{
        marginVertical:3

    },
    followcontainer:{
        display:'flex',
        flexDirection:'row',
        paddingTop:10,
        borderBottomWidth:1,
        borderBottomColor:'lightgrey',



    },
    rightpath:{
        flex:1,
        // marginVertical:13,

        marginBottom:9,
        marginLeft:10,
        // paddingHorizontal:6
        alignContent:'center',
        // alignItems:'center',

    },
    uppercontainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        // width:'100%'

    }
    
  });

  export default styles
  