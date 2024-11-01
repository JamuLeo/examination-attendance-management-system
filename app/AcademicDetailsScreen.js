import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const hatpic= require('../assets/images/wisdomhat.jpg');
const AcademicDetailsScreen= () => {
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [venue, setVenue] = useState('');
  const [time, setTime] = useState('');

  return (
    <View style={styles.container}>
      {/* Top Section with Icon */}
      <View style={styles.iconContainer}>
        <Image 
          source={hatpic} // Replace with your icon's URL or use a local file
          style={styles.icon}
        />
      </View>

      {/* Department Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={department}
          onValueChange={(itemValue) => setDepartment(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Department" value="" />
          <Picker.Item label="Computing" value="computing" />
          <Picker.Item label="Mathematics" value="mathematics" />
          <Picker.Item label="Physics and electronics" value="physics and electronics" />
          <Picker.Item label="Economics,law and government" value="Economics,law and government" />
          {/* Add more departments as needed */}
        </Picker>
      </View>

      {/* Course Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={course}
          onValueChange={(itemValue) => setCourse(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Course" value="" />
          <Picker.Item label="software engineering" value="COM3111" />
          <Picker.Item label="calculus 2" value="MAT221" />
          <Picker.Item label="Electricity and magnetism" value="PHY 121" />
          <Picker.Item label="computer security" value="computer security" />
          <Picker.Item label="" value="computer security" />
          {/* Add more courses as needed */}
        </Picker>
      </View>

      {/* Venue Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={venue}
          onValueChange={(itemValue) => setVenue(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Venue" value="" />
          <Picker.Item label="Mwambo 1" value="Mwambo 1" />
          <Picker.Item label="Wadonda Lecturer Theatre" value="Wadonda Lecturer Theatre" />
          <Picker.Item label="Great Hall" value="Great Hall" />
        </Picker>
      </View>

      {/* Time Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={time}
          onValueChange={(itemValue) => setTime(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Time" value="" />
          <Picker.Item label="9:00 AM" value="9am" />
          <Picker.Item label="10:00 AM" value="10am" />
          {/* Add more time options as needed */}
        </Picker>
      </View>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEBF9',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    marginTop: 50,
    marginBottom: 20,
  },
  icon: {
    width: 100,
    height: 100,
  },
  pickerContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    color: '#000',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AcademicDetailsScreen;
