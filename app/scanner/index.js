import React, { useEffect, useRef, useState } from "react";
import {
  AppState,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { CameraView } from "expo-camera"; // Remove Camera import since it's not used
import { Stack, useRouter } from "expo-router"; // Import useRouter for navigation
import { Overlay } from "./Overlay";

export default function Home() {
  const router = useRouter(); // Initialize useRouter for navigation
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);
  const [studentName, setStudentName] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(true);
  const [scanned, setScanned] = useState(false);

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

  // Fetch data from Google Sheets
  const scanedstudent = async (regNumber) => {
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/1OkMkP_5oeSt8Y8l82afCoj2L1y1Jab8aIbB9_MK-EgU/values/Sheet1!A:B?key=AIzaSyB0-Y_ysx3BjiuqIPAse9AFvwijTEUgR2Y`
      );
      const data = await response.json(); // Extract JSON response
      if (!data.values || data.values.length === 0) {
        console.log("No data found in the Google Sheet.");
        setStudentName("No student data available!");
        return;
      }
      const rows = data.values.slice(1); // Skip header row
      // Check if the scanned regNumber exists in the data
      const studentFound = rows.find((row) => row[0] === regNumber);
      if (studentFound) {
        const studentName = studentFound[1];
        console.log(`${studentName} has attended.`);
        setStudentName(`${studentName} is registered!`);
        // Navigate to ScanSuccessful screen immediately after success
        router.push("/scanner/ScanSuccessful");
      } else {
        console.log("Student not found in the database.");
        setStudentName("Student not found!");
        // Navigate to ScanUnsuccessful screen
        router.push("/scanner/ScanUnsuccessful");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const handleBarCodeScanned = async ({ data }) => {
    if (!scanned) {
      // Only allow scanning once
      setScanned(true);
      await scanedstudent(data.trim()); // Trim whitespace for cleaner input
    }
  };

  if (isCameraActive === null) {
    return <ActivityIndicator size="large" />;
  }
  if (isCameraActive === false) {
    return <Text>No access to camera</Text>;
  }

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
          onBarcodeScanned={(event) => handleBarCodeScanned(event)} // Pass event directly
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
