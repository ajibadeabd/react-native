import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex:1,
        // marginHorizontal:5,
        // alignItems: 'center',
    //    justifyContent: 'center'


    },
    searchcontainer:{

    backgroundColor:'white',


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
    paddingHorizontal:5,
    paddingVertical:15,
    fontWeight:'bold',

    },
    showmore:{
        color:'lightblue',
        margin:9,
        fontSize:16,

    }
    
  });

  export default styles
  