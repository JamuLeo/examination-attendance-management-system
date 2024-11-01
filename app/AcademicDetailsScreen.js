import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const hatpic = require('../assets/images/wisdomhat.jpg');

const AcademicDetailsScreen = () => {
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [venue, setVenue] = useState('');
  const [time, setTime] = useState('');
  
  const [errors, setErrors] = useState({}); // State to store error messages

  // Define courses for each department
  const coursesByDepartment = {
    computing: [
      { label: 'Software Engineering', value: 'COM3111' },
      { label: 'Data Structures', value: 'COM2111' },
      { label: 'Algorithms', value: 'COM2122' },
      { label: 'Computer Security', value: 'COM3211' }
    ],
    mathematics: [
      { label: 'Calculus 2', value: 'MAT221' },
      { label: 'Matlab', value: 'MAT231' },
      { label: 'College Algebra', value: 'MAT211' }
    ],
    'physics and electronics': [
      { label: 'Electricity and Magnetism', value: 'PHY121' },
      { label: 'Quantum Mechanics', value: 'PHY321' }
    ],
    'economics,law and government': [
      { label: 'Financial Accounting', value: 'ACC101' },
      { label: 'Econometrics', value: 'ECO201' },
      { label: 'Microeconomics', value: 'ECO211' }
    ]
  };

  // Function to get courses based on selected department
  const getCourseOptions = () => {
    return department ? coursesByDepartment[department] || [] : [];
  };

  // Function to handle proceed button press
  const handleProceed = () => {
    const newErrors = {};

    if (!department) newErrors.department = 'Please select a department.';
    if (!course) newErrors.course = 'Please select a course.';
    if (!venue) newErrors.venue = 'Please select a venue.';
    if (!time) newErrors.time = 'Please select a time.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with submission if no errors
      console.log("Form submitted successfully");
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Section with Icon */}
      <View style={styles.iconContainer}>
        <Image source={hatpic} style={styles.icon} />
      </View>

      {/* Department Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={department}
          onValueChange={(itemValue) => {
            setDepartment(itemValue);
            setCourse(''); // Reset course when department changes
            setErrors((prevErrors) => ({ ...prevErrors, department: undefined })); // Clear department error
          }}
          style={styles.picker}
        >
          <Picker.Item style={styles.selecting} label="DEPARTMENT" value="" />
          <Picker.Item label="Computing" value="computing" />
          <Picker.Item label="Mathematics" value="mathematics" />
          <Picker.Item label="Physics and Electronics" value="physics and electronics" />
          <Picker.Item label="Economics, Law and Government" value="economics,law and government" />
        </Picker>
        {errors.department && <Text style={styles.errorText}>{errors.department}</Text>}
      </View>

      {/* Course Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={course}
          onValueChange={(itemValue) => {
            setCourse(itemValue);
            setErrors((prevErrors) => ({ ...prevErrors, course: undefined })); // Clear course error
          }}
          style={styles.picker}
          enabled={!!department} // Disable if no department is selected
        >
          <Picker.Item style={styles.selecting} label="COURSE" value="" />
          {getCourseOptions().map((courseOption) => (
            <Picker.Item label={courseOption.label} value={courseOption.value} key={courseOption.value} />
          ))}
        </Picker>
        {errors.course && <Text style={styles.errorText}>{errors.course}</Text>}
      </View>

      {/* Venue Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={venue}
          onValueChange={(itemValue) => {
            setVenue(itemValue);
            setErrors((prevErrors) => ({ ...prevErrors, venue: undefined })); // Clear venue error
          }}
          style={styles.picker}
        >
          <Picker.Item style={styles.selecting} label="VENUE" value="" />
          <Picker.Item label="Mwambo 1" value="Mwambo 1" />
          <Picker.Item label="Wadonda Lecturer Theatre" value="Wadonda Lecturer Theatre" />
          <Picker.Item label="Great Hall" value="Great Hall" />
        </Picker>
        {errors.venue && <Text style={styles.errorText}>{errors.venue}</Text>}
      </View>

      {/* Time Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={time}
          onValueChange={(itemValue) => {
            setTime(itemValue);
            setErrors((prevErrors) => ({ ...prevErrors, time: undefined })); // Clear time error
          }}
          style={styles.picker}
        >
          <Picker.Item label="TIME" value="" />
          <Picker.Item label="9:00 AM" value="9am" />
          <Picker.Item label="10:00 AM" value="10am" />
        </Picker>
        {errors.time && <Text style={styles.errorText}>{errors.time}</Text>}
      </View>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.button} onPress={handleProceed}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    marginTop: 50,
    marginBottom: 20,
  },
  icon: {
    width: 200,
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
  selecting: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});

export default AcademicDetailsScreen;




/*import React, { useState } from 'react';
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
      
      <View style={styles.iconContainer}>
        <Image 
          source={hatpic} // Replace with your icon's URL or use a local file
          style={styles.icon}
        />
      </View>

    
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={department}
          onValueChange={(itemValue) => setDepartment(itemValue)}
          style={styles.picker}
        >
          <Picker.Item style={styles.selecting} label="DEPARTMENT" value="" />
          <Picker.Item label="Computing" value="computing" />
          <Picker.Item label="Mathematics" value="mathematics" />
          <Picker.Item label="Physics and electronics" value="physics and electronics" />
          <Picker.Item label="Economics,law and government" value="Economics,law and government" />
          
        </Picker>
      </View>

      
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={course}
          onValueChange={(itemValue) => setCourse(itemValue)}
          style={styles.picker}
        >
          <Picker.Item style={styles.selecting}label="COURSE" value="" />
          <Picker.Item label="software engineering" value="COM3111" />
          <Picker.Item label="calculus 2" value="MAT221" />
          <Picker.Item label="Electricity and magnetism" value="PHY 121" />
          <Picker.Item label="computer security" value="computer security" />
          <Picker.Item label="" value="computer security" />
       
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={venue}
          onValueChange={(itemValue) => setVenue(itemValue)}
          style={styles.picker}
        >
          <Picker.Item style={styles.selecting} label="VENUE" value="" />
          <Picker.Item label="Mwambo 1" value="Mwambo 1" />
          <Picker.Item label="Wadonda Lecturer Theatre" value="Wadonda Lecturer Theatre" />
          <Picker.Item label="Great Hall" value="Great Hall" />
        </Picker>
      </View>

    
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={time}
          onValueChange={(itemValue) => setTime(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="TIME" value="" />
          <Picker.Item label="9:00 AM" value="9am" />
          <Picker.Item label="10:00 AM" value="10am" />
      /}
        </Picker>
      </View>

     
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    marginTop: 50,
    marginBottom: 20,
  },
  icon: {
    width: 200,
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
  selecting:{
    fontweigh:'bolder',
    fontSize:'20'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AcademicDetailsScreen;*/
