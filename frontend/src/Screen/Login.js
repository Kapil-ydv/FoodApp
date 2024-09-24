// import React, { useState } from 'react';
// import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import CustomInput from '../Component/CustomInput';
// import CustomButton from '../Component/CustomButton';
// import CustomIcon from '../Component/CustomIcon';
// import CustomHeader from '../Component/CustomHeader';
// const Login = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//  const handlePress=()=>{
// console.log('login')
//  }
//  const handleSignUp=()=>{
//     console.log('handleSignUp')
//      }

//   return (
//     <View style={styles.container}>
{
  /* <CustomInput
        label="Name:"
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <CustomInput
        label="Email:"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <CustomButton
        title="Login"
        onPress={handlePress}
        buttonStyle={styles.customButton}
        textStyle={styles.customButtonText}
      />
     <CustomButton
      title="Sign Up"
      onPress={handleSignUp}
      buttonStyle={styles.customButton}
      textStyle={styles.customButtonText}
     ></CustomButton>
     <TouchableOpacity >
     <CustomIcon
       iconName={'stepbackward'}
       iconSize={30}
       iconColor={'#000'}
       iconType="AntDesign"
     ></CustomIcon>
</TouchableOpacity> */
}
{
  /* <CustomHeader
title="update profile "
></CustomHeader>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    display:'flex'
  },
  customButton: {
    backgroundColor: 'green',
    borderRadius: 20,
  },
  customButtonText: {
    fontSize: 20,
  },
});

export default Login; */
}
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,Alert

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import CustomIcon from '../Component/CustomIcon';
// import CustomHeader from '../Component/CustomHeader';
import logo from '../assest/images/login.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleSignUp = () => {
    console.log('handleSignUp');
    navigation.navigate('Signup');
  };
  // const handlePress = () => {
  //   console.log('handleSignUp');
  //   navigation.navigate('Tab');
    

  // };
  const handlePress = async () => {
     await AsyncStorage.setItem('email',email);
   try {
     const url = 'http://192.168.33.104:5218/login'; 
     const response = await fetch(url, {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
         eventID: '1001',
         addInfo: {
           UserId: email,
           password: password
         }
       }),
     });

     const data = await response.json();

     if (data.rData.rCode === 0) {
       
       Alert.alert('login successfully');
       navigation.navigate('Tab');
     } else {
       
       alert(data.rData.rMessage);
     }
   } catch (error) {
     
     console.error('Error logging in:', error);
   }
 };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image source={logo} style={styles.image} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: 80,
          marginHorizontal: 2,
        }}>
        <CustomInput
          //   label="Email:"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <CustomInput
          //   label="Email:"
          placeholder="Enter your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity style={{position: 'absolute', right: 80, top: 105}} onPress={togglePasswordVisibility}>

          <CustomIcon
            iconName={isPasswordVisible?'eye':"eye-off"}
            iconSize={30}
            iconColor={'gray'}
            iconType="Feather"></CustomIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPasswordText} onPress={() => navigation.navigate('ForgotPassword')} >
           <Text style={{color: 'black'}}>ForgotPassword?</Text>
        </TouchableOpacity>
        
      </View>
      <View
        style={{
          width: '80%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          gap: 100,
          marginHorizontal: 40,
          marginBottom: 40,
        }}>
        <CustomButton
          title="Sign in"
          onPress={handlePress}
          buttonStyle={styles.customButton}
          textStyle={styles.customButtonText}
        />
        <CustomButton
          title="Sign up"
          onPress={handleSignUp}
          buttonStyle={styles.customButton}
          textStyle={styles.customButtonText}></CustomButton>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={[styles.socialIcon, {borderColor: 'blue'}]}>
          <CustomIcon
            iconName={'sc-facebook'}
            iconSize={35}
            iconColor={'blue'}
            iconType="EvilIcons"></CustomIcon>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialIcon, {borderColor: 'skyblue'}]}>
          <CustomIcon
            iconName={'sc-twitter'}
            iconSize={35}
            iconColor={'skyblue'}
            iconType="EvilIcons"></CustomIcon>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialIcon, {borderColor: 'red'}]}>
          <CustomIcon
            iconName={'sc-google-plus'}
            iconSize={35}
            iconColor={'red'}
            iconType="EvilIcons"></CustomIcon>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text>Already have an account ?</Text>
        <TouchableOpacity onPress={handleSignUp} >
        <Text style={{color: 'orange'}}>Signup?</Text>
        </TouchableOpacity>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    height: '100vh',
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#faebd7',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 80,
    marginTop: 30,
    borderRadius:100
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    marginTop: 10,
    paddingHorizontal: 70,
   
  },
  customButton: {
    backgroundColor: '#FFA726',
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  customButtonText: {
    fontSize: 20,
  },
});

export default Login;
