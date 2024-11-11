import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// Uncomment and configure your API instance as needed
// import { create } from 'your-api-library';
// const api = create({ baseURL: "http://192.168.38.206:3000/api/" });

const Sugn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [feedbackSignal, setFeedbackSignal] = useState("1");
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Please enter valid input for both username and password.");
      return;
    }

    try {
      const response = await api.post("login", {
        userName: username,
        password: password,
      });

      const data = response.data;

      if (data && data.userName === username) {
        navigation.navigate("CourseSelection", {
          Username: data.userName,
          adminName: data.fullName,
        });
        console.log("Logging in with:", { username, password });
      } else {
        setFeedbackSignal("0");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      Alert.alert("Error", "An error occurred during login. Please try again.");
    }
  };

  // Inline styles
  const styles = {
    window: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      padding: 20,
    },
    scroll: {
      flex: 1,
    },
    firstView: {
      alignItems: 'center',
      marginBottom: 20,
    },
    h1: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    input: {
      height: 40,
      borderColor: '080808',
      borderWidth: 2,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    gap: {
      height: 20,
    },
    buttonContainer: {
      backgroundColor: '#005500',
      padding: 5,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    notFound: {
      color: 'red',
      textAlign: 'center',
    },
    imagelogo: {
        paddingLeft: 550,
        alignItems: 'centre'
    },
    image: {
        width: 200,
        height: 200,
        alignItems: 'centre',
    },
  };

  return (
    <View style={styles.window}>
        <View style={styles.imagelogo}>
        <Image
          source={{ uri: "https://i.pinimg.com/236x/8f/7c/c7/8f7cc771e974e3d6ed6d2e6acbdb549d.jpg" }} // Use your image URI here
          style={styles.image}
        />
        </View>
      <ScrollView style={styles.scroll}>
      
        <View style={styles.firstView}>
        
          <StatusBar style="auto" />
          <Text style={styles.h1}>SIGN IN</Text>
        </View>
        <View style={styles.gap} />
        
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#644F4F"
          onChangeText={setUsername}
        />
        <View style={styles.gap} />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#644F4F"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        
        {feedbackSignal === "0" && (
          <Text style={styles.notFound}>
            Access Denied!! Incorrect credentials
          </Text>
        )}
        
        <View style={styles.gap} />
        
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Sugn;