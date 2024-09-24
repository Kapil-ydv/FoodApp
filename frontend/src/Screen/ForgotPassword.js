import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import CustomIcon from '../Component/CustomIcon';
import CustomHeader from '../Component/CustomHeader';
import CustomTextInput from '../Component/CustomTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ForgotPassword = () => {
    const navigation = useNavigation();
  const [email, setEmail] = useState('');


  const handleForgotPassword = async () => {
    if (email === '') {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }

    try {
      await AsyncStorage.setItem('email',email);
      const response = await fetch('http://192.168.33.104:5218/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventID: '1009',
          addInfo: {
            UserId: email,
          },
        }),
      });

      const result = await response.json();
      if (result.rData.rCode === 2) {
        console.log('Valid email:', email);
        navigation.navigate('ResetPassword');
      } else {
        Alert.alert('Error', result.rData.rMessage || 'Invalid email address.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Forgot Password "></CustomHeader>
      <View><Text style={styles.description}>
        Enter your email address, and we'll send you instructions to reset your
        password.
      </Text>
      </View>
      <View style={{width:'90%',marginleft:20}}>
        <CustomTextInput
        label="EMAIL"
        placeholder="enter your email"
        value={email}
        onChangeText={text => setEmail(text)}
        /></View>
    
      <CustomButton
        title="Continue"
        onPress={handleForgotPassword}
        buttonStyle={styles.customButton}
        textStyle={styles.customButtonText}></CustomButton>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faebd7',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginTop:30,
    marginBottom: 60,
    textAlign: 'center',
  },
  
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  customButton: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA726',
    borderRadius: 8,
    marginLeft: 120,
    marginTop: 40,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  customButtonText: {
    fontSize: 20,
  },
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 3,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 40,
    zIndex: 999,
  },
});

export default ForgotPassword;
