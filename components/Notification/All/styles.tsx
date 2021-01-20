import { StyleSheet } from 'react-native'

import Colors from '../../../constants/Colors'
const styles = StyleSheet.create({
    container:{
        padding:18,
        backgroundColor:'white',
flex:1    

    },
    notificationContainer:{
        flexDirection:'row',
        borderBottomWidth:1,
        paddingVertical:9,
        backgroundColor:'white',

        borderBottomColor:'lightgrey',
    },
    Allcontainer:{
        flex:1,
        marginLeft:5,
    },
    Recommended:{
        fontSize:16,
        fontWeight:'bold',
        paddingVertical:3
    },
    RecommendedBody:{
        color:'grey'

    },
    image:{
        width:"100%",
        resizeMode:'cover',
        height:200,
        marginVertical:10,
        borderRadius:15,
        overflow:'hidden', //ios
    },
})
export default styles