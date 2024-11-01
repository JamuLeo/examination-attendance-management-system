import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
//import Name from '../components/Name';
export default function Next() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>next component here!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
