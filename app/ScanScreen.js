import {
  Image,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Link, Stack } from "expo-router";

import { useCameraPermissions } from "expo-camera";

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  const isPermissionGranted = Boolean(permission?.granted);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Overview", headerShown: false }} />
      <View style={styles.scanContainer}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/cd/57/da/cd57da5934ec71804174e0320615d1e5.jpg", //This is our scanIcon
          }}
          style={styles.scanIcon}
          resizeMode="contain"
        />
      </View>
      <View style={{ gap: 20 }}>
        <Pressable onPress={requestPermission}>
          <Text style={styles.buttonStyle}>Request Permissions</Text>
        </Pressable>
        <Link href={"/scanner"} asChild>
          <Pressable disabled={!isPermissionGranted}>
            <Text
              style={[
                styles.buttonStyle,
                { opacity: !isPermissionGranted ? 0.5 : 1 },
              ]}
            >
              Scan Code
            </Text>
          </Pressable>
        </Link>
        <Link href="/CheckInOut" style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  scanContainer: {
    paddingTop: 150,
    position: "relative",
    backgroundColor: "#FFFFFF",
  },
  scanIcon: {
    // Set the width and height of the scanIcon to 200
    width: 200,
    height: 200,
  },
  buttonStyle: {
    backgroundColor: "#FFFFFF", // White color
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2.8,
    shadowRadius: 6,
    borderWidth: 2, // Set border width
    borderColor: "black", // Set border color to black
  },
});
