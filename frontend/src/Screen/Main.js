import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import CustomInput from '../Component/CustomInput';
import CustomButton from '../Component/CustomButton';
import CustomIcon from '../Component/CustomIcon';
const Main = () => {
    const navigation = useNavigation();
    const handleSignUp = () => {
        console.log('handleSignUp');
        navigation.navigate('Signup');
      };
      const handlePress = () => {
        console.log('handleSignin');
        navigation.navigate('Login');
    
      };
   

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('../assest/images/burgerr.jpg')} style={styles.logo} />
                
            </View>
            <View style={styles.content}>
                <View style={{justifyContent: 'center',marginBottom:90}}>
                <Text style={styles.title}>Search for favorite  </Text>
            <Text style={styles.title}>      food near you   </Text>
            <Text>         Discover the 1000+ food items  </Text>
                            <Text>                                 here</Text>
            </View>
       <View style={{flexDirection: 'row' , gap:100,marginBottom:20 }}>
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
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text>Already have an account ?</Text>
        <TouchableOpacity onPress={handleSignUp} >
        <Text style={{color: 'orange'}}>Signup?</Text>
        </TouchableOpacity>
        
      </View>
      </View>
            </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },customButton: {
        backgroundColor: '#FFA726',
        borderRadius: 8,
        justifyContent: 'space-between',
      },
      customButtonText: {
        fontSize: 20,
      },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 300,
        height: 300,
    },
    title: {
        fontSize: 34,
         color:'black',
        fontWeight: 'bold',
        // marginTop:5,
        // marginBottom: 50,
      },
    
    content: {
        flex: 1,
        width: '100%',
     backgroundColor: '#f5fffa',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        overflow: 'hidden',
    },
    description: {
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
        alignSelf: 'center',
        marginBottom: 20,
    },
    infoLabel: {
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
        width: '30%',
    },
    infoValue: {
        fontSize: 20,
        marginLeft: 90,
        width: '70%',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        width: '70%',
        alignSelf: 'center',
    },
    button: {
        backgroundColor: 'brown',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default Main;