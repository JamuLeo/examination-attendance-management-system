import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
const homeimage = require('../assets/images/home.jpeg');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
    <Image source={homeimage} style={styles.logo} /> 
    <Text style={styles.title}>Students Exam Attendance</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Get Started!</Text>
      <Link href="/AcademicDetailsScreen" >
      
    </Link>
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
    width: 320,
    height: 440,
    marginBottom: 20,
    borderRadius: 18,
  },
  title: {
    color: 'black', // Use 'black' instead of black 
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  link: {
    color: 'blue', // Optional: Add a blue color to the link 
    textDecorationLine: 'underline', // Optional: Add underline for the link 
  },
});

export default HomeScreen;

