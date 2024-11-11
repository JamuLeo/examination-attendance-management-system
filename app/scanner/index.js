import React, { useEffect, useRef, useState } from "react";
import { Camera, CameraView } from "expo-camera";
import { Stack } from "expo-router";
import {
  AppState,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Overlay } from "./Overlay";

// Change the keys in the studentDatabase to strings
const studentDatabase = {
  MWI009K7X0CH: "HASSAN ZAMINI",
  "BSC/44/21": "Hassan Zamini",
  654321: "Jane Smith",
  // Add more mappings as needed
};

// Predefined valid names
const validNames = ["HASSAN ZAMINI", "Hassan Zamini", "Jane Smith"];

export default function Home() {
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);
  const [studentName, setStudentName] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(true);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        qrLock.current = false;
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const handleBarcodeScanned = (data) => {
    console.log("Scanned data:", data); // Log scanned data for debugging

    if (data && !qrLock.current) {
      qrLock.current = true;

      // Retrieve the student name from the database
      const name = studentDatabase[data]; // data should be a string now
      console.log("Retrieved name from database:", name); // Log retrieved name

      if (name) {
        // Check if the name is in the predefined valid names
        if (validNames.includes(name)) {
          setStudentName(`${name} is registered!`);
        } else {
          setStudentName("Student not registered!");
        }
        setIsCameraActive(false); // Stop the camera
      } else {
        setStudentName("Student not found!");
      }

      // Optional: You can set a timeout to reset the state
      setTimeout(() => {
        setStudentName(null);
        setIsCameraActive(true);
        qrLock.current = false; // Reset the QR lock
      }, 3000); // Feedback duration
    }
  };

  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <Stack.Screen
        options={{
          title: "Overview",
          headerShown: false,
        }}
      />
      {Platform.OS === "android" ? <StatusBar hidden /> : null}
      {isCameraActive && (
        <CameraView
          style={StyleSheet.absoluteFillObject}
          facing="back"
          onBarcodeScanned={({ data }) => handleBarcodeScanned(data)}
        />
      )}
      <Overlay />
      {studentName && (
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackText}>{studentName}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  feedbackContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 20,
    borderRadius: 10,
  },
  feedbackText: {
    color: "white",
    fontSize: 18,
  },
});
