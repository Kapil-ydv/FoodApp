import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,Alert
} from 'react-native';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import CustomIcon from '../Component/CustomIcon';
import CustomHeader from '../Component/CustomHeader';
import CustomTextInput from '../Component/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ResetPassword = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
    
  };
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
  };
  // const handleForgotPassword = () => {
  //   console.log(`reset password  `);
  //   navigation.navigate('VerifyMobile');
  // };
  const handleForgotPassword = async () => {
    try {
    
      if (!password.trim() || !confirmpassword.trim()) {
        Alert.alert(
          'Please fill in both New Password and Confirm Password fields',
        );
        return;
      }

     
      if (password !== confirmpassword) {
        Alert.alert('Passwords do not match');
        return;
      }
      const email = await AsyncStorage.getItem('email');
      console.log(email,password,confirmpassword, 'email');
      const url = 'http://192.168.33.104:5218/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          eventID: '1003',
          addInfo: {
            UserId:email,
            newPassword: password,
            confirmNewPassword: confirmpassword,
          },
        }),
      });

      if (response.ok) {
     
      const data = await response.json();
      console.log(data,'response')
      navigation.navigate('VerifyMobile');
      Alert.alert('Password Updated successfully');
      }

      

      // if (data && data.rData && data.rData.rCode === 0) {
      //   Alert.alert('Error', 'Failed to update password');
      // } else {
      //   Alert.alert('Success', 'Password updated successfully');
      //   navigation.navigate('Login');
      // }
    } catch (error) {
      
      console.error('Error in updating:', error);
      Alert.alert('Error', 'Failed to update password');
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Reset Password "></CustomHeader>
      <View><Text style={styles.description}>
        Enter your new password and confirm password 
      </Text>
      </View>
      <View style={{width:'90%',marginleft:20}}>
        <CustomTextInput
        // label="EMAIL"
        placeholder="new password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity style={{position: 'absolute', right: 25, top: 30}} onPress={togglePasswordVisibility}>

          <CustomIcon
            iconName={isPasswordVisible?'eye':"eye-off"}
            iconSize={30}
            iconColor={'gray'}
            iconType="Feather"></CustomIcon>
        </TouchableOpacity>
        <CustomTextInput
        // label="EMAIL"
        placeholder="confirm password"
        value={confirmpassword}
        onChangeText={text => setConfirmpassword(text)}
        secureTextEntry={!isConfirmPasswordVisible}
        />
        <TouchableOpacity style={{position: 'absolute', right: 25, top: 90}} onPress={toggleConfirmPasswordVisibility}>

          <CustomIcon
            iconName={isConfirmPasswordVisible?'eye':"eye-off"}
            iconSize={30}
            iconColor={'gray'}
            iconType="Feather"></CustomIcon>
        </TouchableOpacity>
        </View>
    
      <CustomButton
        title="continue"
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

export default ResetPassword;