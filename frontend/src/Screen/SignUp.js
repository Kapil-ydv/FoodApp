import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity ,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import CustomIcon from '../Component/CustomIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleSignin = () => {
    console.log('handleSignin');
    navigation.navigate('Login');

  };
  const isValidEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  
  const isValidMobileNumber = (phone) => {
    const pattern = /^\+[0-9]{1,3}[0-9]{7,15}$/; 
    return pattern.test(phone);
  };
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  // const handleSignUp = () => {
  //   navigation.navigate('Login');
  //   console.log('Name:', name);
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  // };
  const handleSignUp = async () => {
    // await AsyncStorage.setItem('email',email);
    if (!isValidEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!isValidMobileNumber(phone)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid phone number.');
      return;
    }
   

    const apidata = {
      eventID: "1006",
      addInfo: {
        name: name,
        email: email,
        phone: phone,
        password: password
      }
    };

    try {
      const  url = 'http://192.168.33.104:5218/registration'; 
      const result = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(apidata),
      });
      const data = await result.json();

      if (data.rData.rCode === 0) {
        
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
        

        Alert.alert('User Registered Successfully');
        navigation.navigate('Login');
      } else if (data.rData.rCode === 2) {
        alert('Duplicate data found. Please try again with different credentials.');
      } else {
        alert('An error occurred during registration. Please try again later.');
      }
    } catch (error) {
      console.log(error);
      alert('Error in API calling. Please check your internet connection and try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View  >
        <CustomInput
       
        label="NAME"
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <CustomInput
        
        label="EMAIL"
        placeholder="Enter your email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <CustomInput
        
        label="MOBILE NO."
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={text => setPhone(text)}
      />
      <CustomInput
      
            label="PASSWORD"
          placeholder="Enter your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible} 
      />
        <TouchableOpacity style={{position: 'absolute', right: 90, top: 260}} onPress={togglePasswordVisibility}>

          <CustomIcon
            iconName={isPasswordVisible?'eye':"eye-off"}
            iconSize={30}
            iconColor={'gray'}
            iconType="Feather"></CustomIcon>
        </TouchableOpacity>
        </View>
        <View>
        <CustomButton
          title="Sign up"
          onPress={handleSignUp}
          buttonStyle={styles.customButton}
          textStyle={styles.customButtonText}></CustomButton>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}} >   
        <Text>Already have an account ?</Text>
        <TouchableOpacity onPress={handleSignin} >
        <Text style={{color: 'orange'}}>Sigin?</Text>
        </TouchableOpacity>
       
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faebd7',
    // alignItems: 'center',
    // justifyContent: 'center',
    height: '100vh',
    width: '100%',
    flexDirection: 'column',
  },
  title: {
    fontSize: 34,
    color:'black',
    fontWeight: 'bold',
    marginTop:30,
    
    marginBottom: 50,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  customButton: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA726',
    borderRadius: 8,
     marginLeft:110,
    marginTop:60,
    marginBottom:10,
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  customButtonText: {
    fontSize: 20,
  },
});
export default SignUp;