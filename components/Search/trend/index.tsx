import React from 'react'
import { View,Text } from 'react-native'
import styles from './styles'
import {Ionicons} from '@expo/vector-icons'

export default function HomeSearch() {
    return (
        <View style={styles.container}>
            
            <View style={styles.trendscontainer}>
                <Text style={styles.trendheader}>#covid second wave</Text>
                <Text style={styles.tweet}>8,268  Tweets</Text>
            </View>
            <Ionicons name={"chevron-down"} color="grey" size={16} />

        </View>
    )
}
