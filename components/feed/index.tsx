import React from 'react'
import { Text,View,FlatList } from 'react-native'
import tweets from '../../jsonData/index'
import Tweet from '../tweet'
import TweeterFleetlist from '../tweeterFleetlist'
import { TweetType } from '../../types'
// export type mainProps = {
//     tweet:TweetType,
//     }
const  Index=()=> {
            return(
        <View style={{width:'100%'}}>
            <FlatList
            data={tweets}
            renderItem={({item})=><Tweet Tweet={item}/>}
            keyExtractor={(item)=>item.id} 
            ListHeaderComponent={TweeterFleetlist} />
        </View>

            )
}
export default Index