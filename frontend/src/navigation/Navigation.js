import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../Screen/Login';
import SignUp from '../Screen/SignUp';
import Main from '../Screen/Main';
import ResetPassword from '../Screen/ResetPassword';
import ForgotPassword from '../Screen/ForgotPassword';
import { TouchableOpacity, Text, View, ActivityIndicator, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import VerifyMobile from '../Screen/VerifyMobile';
import Otp from '../Screen/Otp';
import Dashboard from '../Screen/Dashboard';
import Search from '../Screen/Search';
import Profile from '../Screen/Profile';
import Order from '../Screen/Order';
import EditProfile from '../Screen/EditProfile';
import Favourite from '../Screen/Favourite';
import OrderHistory from '../Screen/OrderHistory';
import Address from '../Screen/Address';
import Payment from '../Screen/Payment';
import OrderSuccessfull from '../Screen/OrderSuccessfull';
import TrackOrder from '../Screen/TrackOrder';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Tab" component={TabStack} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}}/>
       <Stack.Screen name="Favourite" component={Favourite} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="OrderSuccessfull" component={OrderSuccessfull} />
        <Stack.Screen name="TrackOrder" component={TrackOrder} /> 
      </Stack.Navigator>
      </View>
  );
}
    const AuthStack = () => (
    // <Stack.Navigator  screenOptions={{headerShown:false}}>
      <Stack.Navigator >
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
    <Stack.Screen name="Main" component={Main} options={{headerShown:false}}/> 
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Signup" component={SignUp} options={{headerShown:false}}/>
  <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:false}}/>
  <Stack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown:false}}/>
  <Stack.Screen name="VerifyMobile" component={VerifyMobile} options={{headerShown:false}}/>
  <Stack.Screen name="Otp" component={Otp} options={{headerShown:false}}/>
      {/* <Stack.Screen name="Dashboard" component={DashboardScreen} />
      
      <Stack.Screen name="Settings" component={SettingsScreen} />
       */} 
    </Stack.Navigator>
    );
    const TabStack = () => (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={Dashboard}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Order"
          component={Order}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="shopping-cart" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
    


export default Navigation;