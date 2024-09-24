import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Image} from 'react-native';
import CustomHeader from '../Component/CustomHeader';
import CustomIcon from '../Component/CustomIcon';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';

const OrderSuccessfull = () => {
    const navigation = useNavigation();
    const handleSuccessfull = () => {
        console.log('track order hit');
        navigation.navigate('TrackOrder');
      };
    
  return (
    <View style={styles.main}>
         <View style={styles.headerContainer}>
        <CustomHeader></CustomHeader>
        <Image source={require('../assest/images/selfie.png')} style={styles.logo}/>
        </View>
        <View style={styles.content}>
      <Text style={styles.title}>Order  Successfull !</Text>
      <Text>You can track your order by clicking </Text>
      <Text>On the button below</Text>
      </View>
      <CustomButton
        title="Track My Order"
        onPress={handleSuccessfull}
        buttonStyle={styles.customButton}
        textStyle={styles.customButtonText}
      ></CustomButton>
    </View>
  );
};
const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    main:{
        backgroundColor:'white',
        flex:1,

    },
    logo: {
        width: 450,
        height: 400,
        // borderRadius:30
    },
    customButton: {
        backgroundColor: '#FFA726',
        borderRadius: 8,
        justifyContent: 'space-between',
        width: '60%',
        marginLeft: 80,
        marginTop:105
      },
      customButtonText: {
        fontSize: 20,
      },
      title: {
        fontSize: 34,
         color:'black',
        fontWeight: 'bold',
        // marginTop:5,
        // marginBottom: 50,
      },
      content: {
        // flex: 1,
        width: '100%',
    //  backgroundColor: '#f5fffa',
        justifyContent: 'center',
        alignItems: 'center',
        // borderTopLeftRadius: 70,
        // borderTopRightRadius: 70,
        // overflow: 'hidden',
        marginTop:60
    },
   } )
;

export default OrderSuccessfull;