
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomHeader from '../Component/CustomHeader';
import CustomIcon from '../Component/CustomIcon';
const Payment = () => {
  return (
    <View style={styles.container}>
      <CustomHeader title="Payment"></CustomHeader>
      <View style={styles.content}>
        {/* <Icon name="credit-card" size={100} color="#FFA726" /> */}
        <CustomIcon
        
          iconName={'credit-card'}
          iconSize={200}
          iconColor={'#FFA726'}
          iconType="FontAwesome5"
        />
        <Text style={styles.successMessage}>Payment Successfull!</Text>
        <Text style={styles.amount}>$225.00</Text>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faebd7',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop:10,
  },
  successMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
  },
  payButton: {
    backgroundColor: '#FFA726',
    marginTop:40,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  payButtonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Payment;
