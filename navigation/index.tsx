import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { ColorSchemeName,View,Text } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import UserMessages from '../components/message/EachMessage/messageDm';
import NewTweetScreen from '../screens/newTweetScreen';
import AuthScreen from '../screens/Auth/AuthScreen';
import FleetScreen from '../screens/story';
import { RootStackParamList,RootDrawerParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ProfilePicture from '../components/profilePicture/index';
import DrawerContent from './drawerContent';

import { Ionicons,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
        {'a'=='a'?
        <AuthScreen/>
        :<RootNavigator />}
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>()
const Allstack=  ()=>{
return <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Fleet" component={FleetScreen} />
      <Stack.Screen name="NewTweet" component={NewTweetScreen}  />
      <Stack.Screen name="UserMessages"
  options={{ title: 'Message' }}
  component={UserMessages}  />
  <Stack.Screen name="NotFound" component={NotFoundScreen} 
  options={{ title: 'Oops!' }}
   />
</Stack.Navigator>}
function RootNavigator() {
  return (
    
<Drawer.Navigator
initialRouteName='Allstack'
drawerContent={props=><DrawerContent {...props}/>}>
  <Drawer.Screen name='Allstack'  component={Allstack} />
  {/* <Drawer.Screen name='AuthScreen'  component={AuthScreen} /> */}
</Drawer.Navigator>
     
  );
}
