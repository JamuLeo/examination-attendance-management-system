import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

const studentsData = [
  { id: "1", registrationNumber: "BSC-44-21", name: "Hassan Zamin" },
  { id: "2", registrationNumber: "BSC-COM-06-21", name: "Leo Jamu" },
  { id: "3", registrationNumber: "BSC-INF-15-21", name: "Louis Makwinja" },
  { id: "4", registrationNumber: "BSC-INF-17-21", name: "Rachael Chavula" },
  { id: "5", registrationNumber: "BED/COM/07/22", name: "Malivenji Wongani" },
  { id: "6", registrationNumber: "BSC/COM/27/21", name: "Chitowe Sifiso" },
  // Add more student records as needed
];

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text.length > 0) {
      const filtered = studentsData.filter(
        //Filter function to match what the user input and  the data in the array

        (student) =>
          student.registrationNumber
            .toLowerCase()
            .includes(text.toLowerCase()) ||
          student.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredStudents(filtered);
    } else {
      setFilteredStudents([]);
    }
  };

  const handleSelectStudent = (student) => {
    //A function that allows the searcher to tick on the searched student
    setSelectedStudent(student);
    setFeedbackMessage(`${student.name} Confirmed!!`);
    setSearchTerm(""); // Clear the search input
    setFilteredStudents([]); // Clear the filtered list
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleSelectStudent(item)}
      style={styles.resultContainer}
    >
      <Text style={styles.resultText}>Name: {item.name}</Text>
      <Text>Registration Number: {item.registrationNumber}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchbarcontainer}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/fa/2d/a4/fa2da4e6b61aa745f198314584dd8826.jpg", //Search bar to improve clarity
          }}
          style={styles.searchbar}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.searchtip}>
        Search Registration number and confirm by tapping!!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Registration Number or Name"
        value={searchTerm}
        onChangeText={handleSearch}
      />
      {filteredStudents.length > 0 ? (
        <FlatList
          data={filteredStudents}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      ) : (
        searchTerm.length > 0 && (
          <Text style={styles.notFoundText}>
            No student found with this registration number or name.
          </Text>
        )
      )}
      {feedbackMessage.length > 0 && (
        <Text style={styles.feedbackText}>{feedbackMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  searchbarcontainer: {
    alignItems: "center",
  },
  searchbar: {
    width: 100,
    height: 100,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#e0f7fa",
    borderRadius: 5,
  },
  resultText: {
    fontWeight: "bold",
  },
  notFoundText: {
    marginTop: 20,
    color: "red",
  },
  list: {
    marginTop: 20,
  },
  feedbackText: {
    marginTop: 20,
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
  },
  searchtip: {
    textAlign: "center",
    paddingBottom: 5,
  },
});

export default SearchScreen;
