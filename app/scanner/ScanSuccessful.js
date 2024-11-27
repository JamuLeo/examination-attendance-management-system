import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Make sure to install this package if you don't have it
import { useNavigation } from "@react-navigation/native"; // If using navigation
import { CheckInOut } from "../CheckInOut";

const ScanSuccessful = () => {
  const navigation = useNavigation();

  const handleScanNextID = () => {
    // Navigate to CheckInOut screen or reset the scanning process
    navigation.navigate("CheckInOut"); // Replace "CheckInOut" with the actual screen name for scanning
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {/* Tick Icon */}
        <Icon name="check-circle" size={100} color="black" />
        {/* SCAN SUCCESSFUL Text */}
        <Text style={styles.successText}>SCAN SUCCESSFUL</Text>
        {/* Checked-in Text */}
        <Text style={styles.checkedInText}>Checked-in</Text>
      </View>
      <View style={styles.buttonContainer}>
        {/* Scan Next ID Button */}
        <TouchableOpacity onPress={handleScanNextID} style={styles.button}>
          <Text style={styles.buttonText}>Scan Next ID</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Ensures centered content vertically
    alignItems: "center", // Centers horizontally
    marginTop: 10, // Adjust top margin for spacing
  },
  iconContainer: {
    alignItems: "center", // Ensures the icon and text are centered
    marginBottom: 30, // Adds space below the icon and text
  },
  successText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  checkedInText: {
    fontSize: 18,
    color: "gray",
  },
  buttonContainer: {
    marginTop: 20, // Adds space before the button
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ScanSuccessful;
