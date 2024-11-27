import React, { useState } from "react";
import { Link } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome5, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const pic = require("../assets/images/wisdomhat.jpg");

const MenuOptionsScreen = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("index"); // Redirect to index.js
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={pic} style={styles.schoolIcon} />
      </View>

      {/* Account Icon with Toggle for User Info */}
      <TouchableOpacity
        style={styles.accountIcon}
        onPress={() => setShowUserInfo(!showUserInfo)}
      ></TouchableOpacity>

      {/* Dummy Data - User Info */}
      {showUserInfo && (
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoText}> {dummyUserData.name}</Text>
        </View>
      )}

      {/* Check In Button */}
      <TouchableOpacity style={styles.button}>
        <FontAwesome5
          name="clock"
          size={24}
          color="#0000FF"
          style={styles.buttonIcon}
        />
        <Link href="/CheckInOut">
          {" "}
          <Text style={styles.buttonTextAligned}>Check In</Text>
        </Link>
      </TouchableOpacity>

      {/* Check Out Button */}
      <TouchableOpacity style={styles.button}>
        <Entypo
          name="log-out"
          size={24}
          color="#1E90FF"
          style={styles.buttonIcon}
        />
        <Link href="/CheckInOut">
          <Text style={styles.buttonTextAligned}>Check Out</Text>
        </Link>
      </TouchableOpacity>

      {/* Attendance Report Button */}
      <TouchableOpacity style={styles.button}>
        <MaterialIcons
          name="event-note"
          size={24}
          color="#FFD700"
          style={styles.buttonIcon}
        />
        <Link href="/AttendanceReport">
          <Text style={styles.buttonTextAligned}>Attendance Report</Text>
        </Link>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  schoolIcon: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 50,
    marginBottom: 20,
  },
  accountIcon: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  userInfoContainer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    borderColor: "gray",
    borderWidth: 1,
    position: "absolute",
    top: 80,
    right: 20,
    width: 150,
  },
  userInfoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: "90%",
    paddingVertical: 15,
    marginVertical: 10,
  },
  buttonIcon: {
    marginLeft: 15,
    marginRight: 20,
  },
  buttonTextAligned: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    flex: 1,
  },
  iconContainer: {
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  logoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MenuOptionsScreen;
