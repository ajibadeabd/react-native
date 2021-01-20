import { Ionicons,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import  React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/home/HomeScreen';
import TweetContent from '../screens/home/TweetContent';
import NotificationScreen from '../screens/notification';
import MessageScreen from '../screens/message';
import SearchScreen from '../screens/search';
import SerchHeader from './serchHeader';
import ProfilePicture from '../components/profilePicture/index';
import { BottomTabParamList,MessageNavigationParamList,
  NotificationParamList,
  SearchNavigationParamList,HomeNavigatorParamList,
   TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
      showLabel:false,
      activeTintColor: Colors[colorScheme].tint 
    }}
      >
      <BottomTab.Screen
      name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-search" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Notifications"
        component={NotificationNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-notifications-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessageNavigation}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-mail" color={color} />,
        }}
      />
     
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons  size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<HomeNavigatorParamList>();

function HomeNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={TabOneScreen}
        // screenOptions={{
         
        // }}
        options={{
          headerStyle: {
            // backgroundColor: '#FFF',
            // marginTop
          },
          // headerTitle:'Homes'
           headerTitle: ()=>{
         return  <Ionicons
          style={{
            textAlign:'center'}}
          name={"logo-twitter"} 
           size={30}
            color={Colors.light.tint}
             />
        },
        headerTintColor: '#fff',
        headerRightContainerStyle:{
          marginRight:15,
        },
        headerLeftContainerStyle:{
          marginLeft:15,
        },
        headerRight:()=>{
          return <MaterialCommunityIcons size={30} color={Colors.light.tint} name={"star-four-points-outline"}/>
        },
        headerLeft:()=>(
        <ProfilePicture
         size={30} 
         image={'https://a-v2.sndcdn.com/assets/images/hp_creator_image-f3d92e09.jpg'}/> 
        )

       }}
      />
        <TabOneStack.Screen
        name="TweetContent"
        options={{
        headerTitle:"Tweet"}}
        component={TweetContent}/>

    </TabOneStack.Navigator>
  );
}

const NotificationScreenStack = createStackNavigator<NotificationParamList>();

function NotificationNavigator() {
  return (
    <NotificationScreenStack.Navigator>
      <NotificationScreenStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{ 
        //   headerTitle: ()=>{
        //     return   <NotificationHeader/>
        // },
        headerLeft:()=>(
          <ProfilePicture
           size={30} 
           image={'https://a-v2.sndcdn.com/assets/images/hp_creator_image-f3d92e09.jpg'}/> 
          ),
          headerRight:()=>{
            return <AntDesign size={25} color={Colors.light.tint} name={"setting"}/>
          },
          headerRightContainerStyle:{
            marginRight:15,
          },
          headerLeftContainerStyle:{
            marginLeft:15,
          },
          headerTitle: 'Notifications'
         }}
      />
    </NotificationScreenStack.Navigator>
  );
}

const SearchNavigationStack = createStackNavigator<SearchNavigationParamList>();

function SearchNavigator() {
  return (
    <SearchNavigationStack.Navigator>
      <SearchNavigationStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          // headerTitle:'Homes'
           headerTitle: ()=>{
            return   <SerchHeader/>
        },
        headerRightContainerStyle:{
          marginRight:15,
        },
        headerLeftContainerStyle:{
          marginLeft:15,
        },
        headerRight:()=>{
          return <AntDesign size={25} color={Colors.light.tint} name={"setting"}/>
        },
        headerLeft:()=>(
        <ProfilePicture
         size={30} 
         image={'https://a-v2.sndcdn.com/assets/images/hp_creator_image-f3d92e09.jpg'}/> 
        )

       }}
      />
    </SearchNavigationStack.Navigator>
  );
}

const MessageNavigationStack = createStackNavigator<MessageNavigationParamList>();

function MessageNavigation() {
  return (
    <MessageNavigationStack.Navigator>
      <MessageNavigationStack.Screen
        name="MessageScreen"
        component={MessageScreen}
        // options={{ headerTitle: 'message' }

        options={{
          headerTitle:'Messages',
        
        headerRightContainerStyle:{
          marginRight:15,
        },
        headerLeftContainerStyle:{
          marginLeft:15,
        },
        headerRight:()=>{
          return <AntDesign 
          size={25} color={Colors.light.tint}
           name={"setting"}/>
        },
        headerLeft:()=>(
        <ProfilePicture
         size={30} 
         image={'https://a-v2.sndcdn.com/assets/images/hp_creator_image-f3d92e09.jpg'}/> 
        )

       }}
      // }
      />
      
    </MessageNavigationStack.Navigator>
  );
}
