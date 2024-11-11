import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
const homeimage = require('../assets/images/home.jpeg');

const HomeScreen =() => {
  return (
    <View style={styles.container}>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  logo: {
    width: 390,
    height: 400,
    marginBottom: 20,
    borderRadius: 48,
    
  },
  title: {
    color: 'black',  
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  titl1:{
    color: 'black', 
    fontWeight: 'bold',
    marginBottom: 30,
    fontSize: 24,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom:18,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    
  },
  link: {
    color: 'blue', 
    textDecorationLine: 'none',
  },
});

export default HomeScreen;

