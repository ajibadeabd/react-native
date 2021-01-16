import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
      padding:10,
      paddingTop:15,
    },
    image:{
      borderRadius:13,
      width:"100%",
      resizeMode:'cover',
      height:200,
      marginVertical:10,
      overflow:'hidden',
    },
    TweetBody:{
        color:'black',
        fontSize:23,
      marginTop:15,
      },
    user:{
      flexDirection:'row',
  
    },
    TweetContent:{
      flex: 1,
        marginLeft:10,
      //   width:"100%",
        flexDirection:'row',
     justifyContent: 'space-between',
  
    },
    timeStamp:{
        fontSize:13,
        paddingBottom:13,
        borderBottomWidth:1,
        borderBottomColor:'lightgrey',
        color:'grey',
    },
    textTweet:{
        paddingLeft:40,
    },
    retweetContainer:{
        flexDirection:'row',
        padding:10, 
         borderBottomWidth:1,
        borderBottomColor:'lightgrey',

    },
    retweet:{
        fontSize:16,
        color:'grey'
    },
    bold:{
        fontWeight:'900',
        fontSize:16,
        color:'grey',
        // padding:52
        // textShadowColor:'red'

    },
    
  });

  export default styles
  