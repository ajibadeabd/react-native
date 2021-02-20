import React from 'react'
import Login from '../../components/Auth/Login/Login'
import SignUp from '../../components/Auth/SignUp/Register'
import FirstAuth from '../../components/Auth/Index'
import confirm_Create_Account from '../../components/Auth/confirm_Create_Account'
import Experience from '../../components/Auth/Experience/Experience'
import {createStackNavigator}from '@react-navigation/stack'
import { View,Text,StyleSheet } from 'react-native'
const Stack =createStackNavigator()
export default function AuthScreen() {
    return (
        // <View>
        // <Auth/>
        // </View>
       <Stack.Navigator screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="FirstAuth" component={FirstAuth} />
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="SignUp" component={SignUp} />
                  <Stack.Screen name="Experience" component={Experience} />
                  <Stack.Screen name="confirm_Create" component={confirm_Create_Account} />
                 
            </Stack.Navigator>
    )}
