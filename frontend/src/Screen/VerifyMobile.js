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

const VerifyMobile = () => {
    const navigation = useNavigation();
  const [phone, setPhone] = useState('');

  // const handleVerifyMobile = () => {
  //   console.log(`otp send on number`);
  //   navigation.navigate('Otp');
  // };
  const handleVerifyMobile = async () => {
    try {
      if (!phone.trim()) {
        
        Alert.alert('Please enter your mobile number');
        return;
      }
  
      // await AsyncStorage.setItem('mobileNumber', phone);
      const url = 'http://192.168.33.104:5218/login'; 
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventID: '1002',
          addInfo: {
            UserId: phone,
          }
        }),
      });
      const data = await response.json();
  
      if (data.rData.rCode === 2) {
        
        Alert.alert('OTP sent successfully');
        navigation.navigate('Otp');
      } else {
        
        alert(data.rData.rMessage);
      }
    } catch (error) {
     
      console.error('Error in sending OTP:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <CustomHeader title="Verify Your phone number "></CustomHeader>
      <View><Text style={styles.description}>
        Enter your mobile number , and we'll verify you by sending a otp on your
        phone.
      </Text>
      </View>
      <View style={{width:'90%',marginleft:20}}>
        <CustomTextInput
        // label=""
        placeholder="enter your mobile no."
        value={phone}
        onChangeText={text => setPhone(text)}
        /></View>
    
      <CustomButton
        title="Continue"
        onPress={handleVerifyMobile}
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

export default VerifyMobile;
