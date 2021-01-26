import React,{useState} from 'react'
import { View,Button,StyleSheet } from 'react-native'
import Tcolor from '../constants/Colors'
import { DrawerItem
,DrawerContentScrollView,
 } from '@react-navigation/drawer'
import {Avatar,Title,Text,Switch,Paragraph,
Caption,Drawer,TouchableRipple
} from 'react-native-paper'
import {MaterialIcons,FontAwesome, Ionicons,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';

// import Icon from "react-native-vector-icons/MaterialCommunityIcons"
export default function DrawerContent(props) {
    // const navigation = useNavigation()
    const [isDarkTheme,setIsDarkTheme] = useState(false)
    const toggleTheme=()=>{
        setIsDarkTheme(!isDarkTheme)

    }
    return (
        <View style={{flex:1}}>

            {/* <Text>fvr4this</Text> */}
            <DrawerContentScrollView {...props}>
<View style={styles.drawerContent}>
    <View style={styles.userInfoSection}>
        <View style={{flexDirection:'column',marginTop:15}}>
            <Avatar.Image
            source={{
                uri:'https://pbs.twimg.com/profile_images/1250882162263547919/U0QTPtKn_400x400.jpg'
            }}
            size={70}
            />
            <View style={{flexDirection:'column'}}>
                <Title style={styles.title}>
                    Abdullah Ajibade
                </Title>
                <Caption style={styles.caption}>
                    @kordfootwear
                </Caption>
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.section}>
                <Paragraph style={[styles.section,styles.caption]}>100</Paragraph>
            <Caption style={styles.caption}>
                    Following
            </Caption>
            </View>
            <View style={styles.section}>
                <Paragraph style={[styles.section,styles.caption]}>100</Paragraph>
            <Caption style={styles.caption}>
                    Following
            </Caption>
            </View>

        </View>
    </View>
    <Drawer.Section style={styles.drawerSection}>
    <DrawerItem
            icon={({color,size})=>(
                <MaterialCommunityIcons 
                 name='account-outline'
                 color={color}
                 size={size}
                 onPress={()=>{}}
                 />
            )}
            label='profile'>
            </DrawerItem>

            {/* <FontAwesome name="list-alt" size={24} color="black" /> */}
            <DrawerItem
            icon={({color,size})=>(
                <FontAwesome
                 name='list-alt'
                 color={color}
                 size={size}
                 onPress={()=>{}}
                 />
            )}
            label='Lists'>
                {/* <MaterialIcons name="topic" size={24} color="black" /> */}
            </DrawerItem>
            <DrawerItem
            icon={({color,size})=>(
                <MaterialIcons
                 name='topic'
                 color={color}
                 size={size}
                 onPress={()=>{}}
                 />
            )}
            label='Topic'>
            </DrawerItem>
            <DrawerItem
            icon={({color,size})=>(
                <MaterialCommunityIcons 
                 name='bookmark-outline'
                 color={color}
                 size={size}
                 onPress={()=>{}}
                 />
            )}
            label='Bookmarks'>
            </DrawerItem>
            <DrawerItem
            icon={({color,size})=>(
                <MaterialCommunityIcons 
                 name='flash-outline'
                 color={color}
                 size={size}
                 onPress={()=>{}}
                 />
            )}
            label='Moments'>
            </DrawerItem>

    </Drawer.Section>
    <Drawer.Section >
        {/* <TouchableRipple onPress={()=>{
            toggleTheme()
        }}> */}
        <View style={styles.preference}>
            <Text style={{fontSize:16}}>Settings and Privacy</Text>

        </View>
            <View style={styles.preference}>
                <Text style={{fontSize:16}}>Help Center</Text>

            </View>
        {/* </TouchableRipple> */}
    </Drawer.Section>
</View>


{/* <View style={{flexDirection:'column'}}>

</View> */}
            </DrawerContentScrollView>
            <Drawer.Section  style={{...styles.bottomDrawerSection,
                flexDirection:'row',
                justifyContent:'space-between',
                // backgroundColor:'red'
                }}>
                <DrawerItem
            // <Ionicons name="bulb-outline" size={24} color="black" />
                icon={({color,size})=>(
                    <Ionicons 
                     name='bulb-outline'
                     color={'#4D9FEC'}
                    //  color={Tcolor}
                     size={size}
                     onPress={()=>{}}
                     />
                )}
                label='Sign out'>

                </DrawerItem>
                {/* <DrawerItem
                style={{
                // backgroundColor:'green',
                // alignSelf:'flex-end',
                // alignItems:'flex-end',
                paddingLeft:7,
                height:40,
                width:40,

                }}
            // <Ionicons name="bulb-outline" size={24} color="black" />
                icon={({color,size})=>(
                    <Ionicons 
                     name='bulb-outline'
                     color={'#4D9FEC'}
                     size={size}
                     onPress={()=>{}}
                     />
                )}
                label='Sign out'>

                </DrawerItem> */}
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent:{
        flex:1
    },
    userInfoSection:{
        paddingLeft:20
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold'
    },
    caption:{
        fontSize:14,
        lineHeight:14
    },

    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom:25,
        borderTopColor:"#f4f4f4",
        borderTopWidth:1,
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16,

    }
})