import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/CheckInOut" style={styles.button}>
        CHEKIN
      </Link>
      <Link href="/CheckInOut" style={styles.button}>
        CHECKOUT
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    fontSize: 30,
    textDecorationLine: "underline",
    color: "#000000",
    fontWeight: "bold",
  },
});
