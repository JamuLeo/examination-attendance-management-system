import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "expo-router"; // Use expo-router for navigation
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig"; // Ensure FireBaseConfig is properly set up

const pic = require("../assets/images/wisdomhat.jpg");

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    setLoading(true); // Show loading spinner
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential);

      // Check if user is an admin
      const adminEmails = [
        "admin311@gmail.com",
        "admin312@gmail.com",
        "admin313@gmail.com",
        "admin314@gmail.com",
        "admin315@gmail.com",
      ];

      if (adminEmails.includes(email)) {
        // Navigate to AcademicDetailsScreen for admin accounts
        navigation.navigate("AcademicDetailsScreen");
      } else {
        // Redirect other users to a different screen if needed
        navigation.navigate("UserHomeScreen"); // Replace with appropriate screen
      }
    } catch (error) {
      console.error("Login Error:", error);
      let errorMessage = "Invalid credentials.";
      if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid credentials.";
      } else if (error.code === "auth/user-not-found") {
        errorMessage = "Invalid credentials.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Invalid credentials.";
      }
      Alert.alert("Error", errorMessage);
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.icon} />
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

      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.link}>
        Don’t have an account?{" "}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    paddingBottom: 120,
  },
  icon: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    fontSize: 16,
  },
  linkText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default LoginScreen;
