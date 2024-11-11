import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Link } from "expo-router";
const hatpic = require("../assets/images/wisdomhat.jpg");

const AcademicDetailsScreen = () => {
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("");
  const [venue, setVenue] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState({});

  const coursesByDepartment = {
    computing: [
      { label: "Software Engineering", value: "COM311" },
      { label: "Data Structures", value: "COM211" },
      { label: "Algorithms", value: "COM314" },
      { label: "Computer Security", value: "COM315" },
    ],
    mathematics: [
      { label: "Calculus 1", value: "MAT211" },
      { label: "Calculus 2", value: "MAT221" },
      { label: "Matlab", value: "MAT231" },
      { label: "College Algebra", value: "MAT211" },
    ],
    "physics and electronics": [
      { label: "Electricity and Magnetism", value: "PHY121" },
      { label: "Quantum Mechanics", value: "PHY321" },
    ],
    "economics,law and government": [
      { label: "Financial Accounting", value: "ACC101" },
      { label: "Econometrics", value: "ECO201" },
      { label: "Microeconomics", value: "ECO211" },
    ],
  };

  const getCourseOptions = () => {
    return department ? coursesByDepartment[department] || [] : [];
  };

  const validateFields = () => {
    const newErrors = {};
    if (!department) newErrors.department = "Please select a department";
    if (!course) newErrors.course = "Please select a course";
    if (!venue) newErrors.venue = "Please select a venue";
    if (!time) newErrors.time = "Please select a time";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceed = () => {
    if (validateFields()) {
      console.log("All fields are valid, proceeding...");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={hatpic} style={styles.icon} />
      </View>

      {}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={department}
          onValueChange={(itemValue) => {
            setDepartment(itemValue);
            setCourse("");
            setErrors({ ...errors, department: "" });
          }}
          style={styles.picker}
        >
          <Picker.Item label="DEPARTMENT" value="" />
          <Picker.Item label="Computing" value="computing" />
          <Picker.Item label="Mathematics" value="mathematics" />
          <Picker.Item
            label="Physics and Electronics"
            value="physics and electronics"
          />
          <Picker.Item
            label="Economics, Law and Government"
            value="economics,law and government"
          />
        </Picker>
        {errors.department && (
          <Text style={styles.errorText}>{errors.department}</Text>
        )}
      </View>

      {}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={course}
          onValueChange={(itemValue) => {
            setCourse(itemValue);
            setErrors({ ...errors, course: "" });
          }}
          style={styles.picker}
          enabled={!!department}
        >
          <Picker.Item label="COURSE" value="" />
          {getCourseOptions().map((courseOption) => (
            <Picker.Item
              label={courseOption.label}
              value={courseOption.value}
              key={courseOption.value}
            />
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
            setErrors({ ...errors, venue: "" });
          }}
          style={styles.picker}
        >
          <Picker.Item label="VENUE" value="" />
          <Picker.Item label="Mwambo 1" value="Mwambo 1" />
          <Picker.Item
            label="Wadonda Lecturer Theatre"
            value="Wadonda Lecturer Theatre"
          />
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
            setErrors({ ...errors, time: "" });
          }}
          style={styles.picker}
        >
          <Picker.Item label="TIME" value="" />
          <Picker.Item label="08:30AM-11:30AM" value="08:30AM-11:30AM" />
          <Picker.Item label="01:30PM-04:30PM" value="01:30PM-04:30PM" />
        </Picker>
        {errors.time && <Text style={styles.errorText}>{errors.time}</Text>}
      </View>

      {}
      <TouchableOpacity style={styles.button} onPress={handleProceed}>
        <Link href="/MenuOptionsScreen">
          <Text style={styles.buttonText}>Proceed</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    color: "#000",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
    marginBottom: 10, // Adds space between error and the next field
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AcademicDetailsScreen;
``;
