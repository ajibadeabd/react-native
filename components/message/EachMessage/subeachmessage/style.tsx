import { StyleSheet } from 'react-native'

import Colors from '../../../../constants/Colors'
const styles = StyleSheet.create({
    button:{
        backgroundColor:Colors.light.tint,
        borderRadius:50,
        bottom:30,
        // right:50,
        marginLeft:110,
        width:60,
        height:60,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',

    },
    container:{
        flexDirection:'row',
        padding:15,
        borderBottomWidth:1,
        paddingBottom:11,
        borderBottomColor:'lightgrey',

        // justifyContent:'space-between',
    },
    image:{
        paddingRight:12
    },
    name:{
        fontSize:16,
    },
    header:{
        flexDirection:'row',
    },
    upper:{
        justifyContent:'space-between',
        flexDirection:'row',
 },
   
    days:{
        color:'grey',
        fontSize:16,
    },
    handle:{
        color:'grey',
        fontSize:16,
    },
    secondContainer:{
        flex:1,
    },
    preText:{
        color:'grey',
        // backgroundColor:'red',
    marginRight:4,
    marginTop:0,
    lineHeight:3,
    paddingHorizontal:3,
    textAlign:'center',
    },
    text:{
        color:'grey',
        fontSize:15
    }
})
export default styles