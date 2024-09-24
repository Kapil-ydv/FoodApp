import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import CustomIcon from '../Component/CustomIcon';
import CustomHeader from '../Component/CustomHeader';
import CustomTextInput from '../Component/CustomTextInput';
const Otp = () => {
    const navigation = useNavigation(); 
  const [otpCode, setOtpCode] = useState('');
  const [resendEnabled, setResendEnabled] = useState(false);

  const handleOtpChange = (text) => {
    setOtpCode(text);
  };

  const handleVerifyPress = () => {

    
    console.log('Verify OTP code:', otpCode);
    navigation.navigate('Login')
  };

  const handleResendPress = () => {
    
    setResendEnabled(true);
    setTimeout(() => {
      setResendEnabled(false);
    }, 30); 
    navigation.navigate('Otp')
  };

  return (
    <View style={styles.container}>
     <CustomHeader title="Confirmation Code "></CustomHeader>
     <View><Text style={styles.description}>
        Enter your OTP code here 
      </Text>
      </View>
      <View style={{marginBottom:20,marginRight:40}}>
      <CustomTextInput
        value={otpCode}
        placeholder="enter otp here"
        onChangeText={handleOtpChange}
        keyboardType="number-pad"
        maxLength={6}
        style={{ height: 40,width:'80%', borderColor: 'gray', borderWidth: 1 ,marginBottom:20}}
      />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text>Didn't receive the OTP?</Text>
        <TouchableOpacity onPress={handleResendPress} >
        <Text style={{color: 'orange'}}>Resend?</Text>
        </TouchableOpacity>
      </View>
      <CustomButton
        title="Verify"
        onPress={handleVerifyPress}
        buttonStyle={styles.customButton}
        textStyle={styles.customButtonText}></CustomButton>
      {/* <TouchableOpacity onPress={handleResendPress} disabled={!resendEnabled}>
        <Text>Didn't receive the OTP? Resend.</Text>
      </TouchableOpacity> */}
      
    </View>
  );
};
const styles = StyleSheet.create({
    description: {
        fontSize: 16,
        marginTop:30,
        marginBottom: 20,
        textAlign: 'center',
      },
      container: {
        flex: 1,
        backgroundColor: '#faebd7',
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 25,
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
    });


export default Otp;