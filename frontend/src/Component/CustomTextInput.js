import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

const CustomTextInput = ({ label, placeholder, value, onChangeText ,secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.shadowContainer}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 3,
    // width:'100%'
    // marginLeft:10
  },
  label: {
    // marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius:5
  },
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 3,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 40,
    width:'100%'
    // zIndex: 999,
  },
});

export default CustomTextInput;

