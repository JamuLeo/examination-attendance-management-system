import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {Link} from 'expo-router';
const homeimage=require("../assets/images/homelogo.jfif");

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={homeimage} style={styles.logo} /> 
      <Text style={styles.title}>Students <br>Exam Attendance</br></Text>
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
    borderRadius:18,
  },
  title: {
    color:black,
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
});

export default HomePage;




