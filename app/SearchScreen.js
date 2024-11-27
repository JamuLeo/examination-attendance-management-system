import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [studentsData, setStudentsData] = useState([]);

  // Fetch data from Google Sheets
  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const response = await fetch(
          "https://sheets.googleapis.com/v4/spreadsheets/1OkMkP_5oeSt8Y8l82afCoj2L1y1Jab8aIbB9_MK-EgU/values/Sheet1!A:B?key=AIzaSyB0-Y_ysx3BjiuqIPAse9AFvwijTEUgR2Y"
        );
        const data = await response.json();
        const rows = data.values.slice(1); // Skip header row
        const formattedData = rows.map((row, index) => ({
          id: (index + 1).toString(),
          registrationNumber: row[0], // Assuming registration number is in the first column
          name: row[1], // Assuming name is in the second column
        }));
        setStudentsData(formattedData);
      } catch (error) {
        console.error("Error fetching students data:", error);
      }
    };

    fetchStudentsData();
  }, []);

  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text.length > 0) {
      const filtered = studentsData.filter(
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
    setSelectedStudent(student);
    setFeedbackMessage(`${student.name} has marked as attended!!`);
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
            uri: "https://i.pinimg.com/736x/fa/2d/a4/fa2da4e6b61aa745f198314584dd8826.jpg", // Search bar to improve clarity
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
