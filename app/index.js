import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add first component here</Text>
      <Link href="/SignUpScreen" style={styles.button}>
        Go to Sign Up Screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#00fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'black',
  },
});
