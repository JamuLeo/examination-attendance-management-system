import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';

const pic = require('../assets/images/wisdomhat.jpg');

const Index = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);

  // Dummy data for demonstration
  const dummyUserData = {
    name: 'Sifiso Chitowe',
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
      >
        <MaterialIcons name="account-circle" size={30} color="black" />
      </TouchableOpacity>

      {/* Dummy Data - User Info */}
      {showUserInfo && (
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoText}> {dummyUserData.name}</Text>
        </View>
      )}

      {/* Check In Button */}
      <TouchableOpacity style={styles.button}>
        <FontAwesome5 name="clock" size={24} color="#0000FF" style={styles.buttonIcon} />
        <Text style={styles.buttonTextAligned}>Check In</Text>
      </TouchableOpacity>

      {/* Check Out Button */}
      <TouchableOpacity style={styles.button}>
        <Entypo name="log-out" size={24} color="#1E90FF" style={styles.buttonIcon} />
        <Text style={styles.buttonTextAligned}>Check Out</Text>
      </TouchableOpacity>

      {/* Attendance Report Button */}
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="event-note" size={24} color="#FFD700" style={styles.buttonIcon} />
        <Text style={styles.buttonTextAligned}>Attendance Report</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  schoolIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 50,
    marginBottom: 20,
  },
  accountIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  userInfoContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    borderColor: 'gray',
    borderWidth: 1,
    position: 'absolute',
    top: 80,
    right: 20,
    width: 150,
  },
  userInfoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    paddingVertical: 15,
    marginVertical: 10,
  },
  buttonIcon: {
    marginLeft: 15,
    marginRight: 20,
  },
  buttonTextAligned: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    flex: 1,
  },
  iconContainer: {
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 100,
    width: '60%',
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Index;
