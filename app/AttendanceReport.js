import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";

export default function AttendanceReport() {
  const googleSheetLink =
    "https://docs.google.com/spreadsheets/d/1OkMkP_5oeSt8Y8l82afCoj2L1y1Jab8aIbB9_MK-EgU/edit?gid=0#gid=0"; // Replace YOUR_SHEET_ID with your actual sheet ID

  const openGoogleSheet = () => {
    Linking.openURL(googleSheetLink).catch((err) =>
      console.error("Failed to open link:", err)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Attendance Report</Text>
      <TouchableOpacity onPress={openGoogleSheet} style={styles.linkButton}>
        <Text style={styles.linkText}>Open Google Sheet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  linkButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  linkText: {
    color: "white",
    fontSize: 18,
  },
});
