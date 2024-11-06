import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
const pic=require('../assets/images/wisdomhat.jpg');
const Index = () => {
  return (
    <View style={styles.container}>
      <view style={styles.iconcontainer}>
        <image source={pic} style={styles.icon}/>
      </view>

      {/* Account Icon */}
      <TouchableOpacity style={styles.accountIcon}>
        <MaterialIcons name="account-circle" size={30} color="black" />
      </TouchableOpacity>

      {/* Check In Button */}
      <TouchableOpacity style={styles.button}>
        <FontAwesome5 name="clock" size={24} color="#0000FF" style={styles.icon} />
        <Text style={styles.buttonText}>Check In</Text>
      </TouchableOpacity>

      {/* Check Out Button */}
      <TouchableOpacity style={styles.button}>
        <Entypo name="log-out" size={24} color="#1E90FF" style={styles.icon} />
        <Text style={styles.buttonText}>Check Out</Text>
      </TouchableOpacity>

      {/* Attendance Report Button */}
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="event-note" size={24} color="#FFD700" style={styles.icon} />
        <Text style={styles.buttonText}>Attendance Report</Text>
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
    alignItems:'center',
    padding: 20,
  },
  schoolIcon: {
    marginTop: 40,
    marginBottom: 20,
  },
  accountIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    width: '80%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer:{
    marginTop:50,
    marginBottom:20,
  },
  icon:{
    width:200,
    height:100,
  },
  logoutButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 30,
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Index;