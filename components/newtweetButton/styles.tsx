import { StyleSheet } from 'react-native'

import Colors from '../../constants/Colors'
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

    }
})
export default styles