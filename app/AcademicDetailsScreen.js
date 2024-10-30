import { Text, View, StyleSheet } from 'react-native';

export default function AcademicDetailsScreen() {
  return (
    <View  style={styles.container}>
      <Text style={styles.text}>next component here</Text>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});