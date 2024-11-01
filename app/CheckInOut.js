import React from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CheckInOut = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Logocontainer}>
        <Image
          source={{
            uri: "https://i.pinimg.com/236x/8f/7c/c7/8f7cc771e974e3d6ed6d2e6acbdb549d.jpg",
          }} //logo URL
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.scanContainer}>
        <TouchableOpacity style={styles.scanButton}>
          <Text style={styles.buttonText}>Scan QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scanButton}>
          <Text style={styles.buttonText}>Search Manually</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  Logocontainer: {
    paddingTop: 50,
    position: "relative",
    backgroundColor: "#FFFFFF", // Optional background color
  },
  logo: {
    width: 200, // Set the width of the logo
    height: 200, // Set the height of the logo
  },
  scanContainer: {
    paddingTop: 20,
    gap: 40,
  },
  scanButton: {
    backgroundColor: "#FFFFFF", // White color
    padding: 10,
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2.8,
    shadowRadius: 6,
    borderWidth: 2, // Set border width
    borderColor: "black", // Set border color to black
  },
  buttonText: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
  },
});

export default CheckInOut;
