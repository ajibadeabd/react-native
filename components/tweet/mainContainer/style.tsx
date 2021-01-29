import {StyleSheet} from 'react-native'

const styles= StyleSheet.create({
    tweetHeaderContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        // flex:1
    },
    createdAt:{
        marginRight:5
    },
    name:{
marginRight:5,
fontWeight:'bold'
    },
    userName:{
color:'grey',
marginHorizontal:5

    },
    tweetHeaderContainerText:{
// flex:1,
flexDirection:'row'
    },
    container:{
          flex:1,
        //   backgroundColor:'blue'
        marginHorizontal:5,
    },
    content:{
        marginRight:4,
        marginTop:5,
        lineHeight:19,
    },
    image:{
        width:"100%",
        resizeMode:'cover',
        height:200,
        marginVertical:10,
        borderRadius:15,
        overflow:'hidden', //ios

    }
})

export default styles