import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const index = () => {
  return (
    <View>
      <Link href="/MenuOptionsScreen">
      <Text>index</Text>
      </Link>
      
    </View>
  )
}

export default index
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
const homeimage = require('../assets/images/home.jpeg');

const HomeScreen =() => {
  return (
    <View style={styles.container}>
    <Image source={homeimage} style={styles.logo} /> 
    <Text style={styles.title}>Students</Text>
    <Text style={styles.titl1}> Exam Attendance</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>
      <Link href="/SignInScreen" >
      Get Started!
      </Link></Text>
      
    </TouchableOpacity>
  </View>
);
};

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
