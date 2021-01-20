import React from 'react'
import { View,Text,StyleSheet ,ScrollView} from 'react-native'
import styles from './styles'

import color from '../../constants/Colors'

import Trends from './trend'
import Whotofollow from './whotofollow'
export default function HomeSearch() {
    return (
        <View style={styles.container}>
              <ScrollView>

        <View style={styles.searchcontainer}>
                <Text style={styles.trendtitle}>Trends for you</Text>
                <Trends />
                <Trends />
                <Trends />
                <Trends />
                <Trends />
                <Text
                 style={{...styles.showmore,color:color.light.tint}}>Show more</Text>
        </View>
        
        <Whotofollow/>

        </ScrollView>

        </View>
    )
}
