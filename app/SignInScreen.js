import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

const hatImage = require('../assets/gradHat.png');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter email and password');
    } else {
      Alert.alert('Success', 'Logged in successfully!');
      // Add navigation or other successful login logic here
    }
  };

  return (
    <View style={styles.container}>
      <Image source={hatImage} style={styles.icon} />
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Link href="/AcademicDetailsScreen">
        <Text style={styles.buttonText}>Log In</Text>
        </Link>
       
      </TouchableOpacity>

      <Link href="/SignUpScreen" style={styles.link}>
        Don’t have an account? <Text style={styles.linkText}>Sign Up</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    fontSize: 16,
    textDecorationLine: 'nounderline',
  },
  linkText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
