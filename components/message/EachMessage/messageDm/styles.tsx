import { StyleSheet } from 'react-native'

import Colors from '../../../../constants/Colors'
const styles = StyleSheet.create({
    container: {
        flex:1,
        // flexDirection:'row',
        // padding:5,
        paddingTop:30,
        //  justifyContent: 'space-between',
        //  alignContent:'center',
        //  alignItems :'center',
        // backgroundColor:'red',
    
      },
      gif:{
          borderColor:Colors.dark.tint,
          borderWidth:1,
        //   paddingLeft:-33,
          marginRight:3,
          alignSelf:'center',
          alignContent:'center',
          height:20,
          width:20,

          
      },
      media:{
          marginRight:4
          
      },
      send:{
          flexDirection:'row',
          justifyContent:'center',
          position:'absolute',
          height:40,
          borderTopWidth:1,
          borderTopColor:'lightgrey',
          bottom:-3,
          padding:9,
          width:'95%',
          margin:'2%',
    },
    textarea:{
        borderBottomWidth:1,
        width:'80%',
        borderBottomColor:Colors.dark.tint,
    },
      safe:{
    
        flexDirection:'row',
        padding:32,
        paddingLeft:12,
        paddingBottom:45,
        alignItems: 'center',
        borderBottomColor:'lightgrey',
        borderBottomWidth:1,
        height:50,
        justifyContent: 'space-between',
    
    
      },

      headContainer:{
        flexDirection:'row',
      },
      mine:{
backgroundColor:'lightgrey',
padding:10,
marginVertical:3,
borderRadius:10,
borderBottomLeftRadius:0,
color:'black',
alignSelf:'flex-start',
maxWidth:'70%'
      },
      his:{
        backgroundColor:Colors.dark.tint,
        padding:10,
        marginVertical:10,
        borderRadius:10,
        borderBottomRightRadius:0,
        color:'white',
        alignSelf:'flex-end',
        maxWidth:'70%'
      },
      body:{
        //   margin:2
      },
      profile:{
          justifyContent:'center',
          alignSelf:'center',

      },
      userProfile:{
        fontSize:16,
        alignSelf:'center'


      },
      profileUserName:{
        fontSize:16,
        fontWeight:'bold',
      textAlign:"center"

      },
      profilehandle:{
        fontSize:16,
      textAlign:"center",

       color:Colors.dark.tint,
      },
      following:{
        color:'grey',
      textAlign:"center"


      },
      followwers:{
        color:'grey',
        alignSelf:'center'


      },
      joined:{
      },
      profilenamehandle:{
          display:'flex',
          flexDirection:'row',
          alignSelf:'center'
          
      },
      num:{
          fontSize:16,
          color:'black',
          fontWeight:'bold'
      },
      mynums:{
        flexDirection:'row'

      }
    
})
export default styles




