import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
       justifyContent: 'space-between',
       paddingHorizontal:7,
       borderBottomColor:'lightgrey',
       borderBottomWidth:1,
       paddingVertical:14,
    },
    image:{
      borderRadius:13,
      width:"100%",
      resizeMode:'cover',
      height:200,
      marginVertical:10,
      overflow:'hidden',
    },
    tweet:{
    color:'grey',
    paddingHorizontal:9,
    },
    trendheader:{
    fontSize:16,
    paddingHorizontal:9,
    fontWeight:'bold',

    },
    trendscontainer:{

    


    }
    
  });

  export default styles
  