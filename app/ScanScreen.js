import { Image, View, Text, StyleSheet } from "react-native";
import React from "react";

const ScanScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/564x/cd/57/da/cd57da5934ec71804174e0320615d1e5.jpg", //This is our logo
        }}
        style={styles.scanIcon}
        resizeMode="contain"
      />
      <Text style={styles.scanbutton}>ScanScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingTop: 80,
  },

  scanIcon: {
    // Set the width and height of the scanIcon to 200
    width: 300,
    height: 300,
  },
  scanbutton: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "#FFFFFF",
    padding: 10,
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2.8,
    shadowRadius: 6,
    borderWidth: 2,
    borderColor: "black",
  },
});

export default ScanScreen;
