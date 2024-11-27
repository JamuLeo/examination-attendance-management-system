import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {" "}
      <Stack.Screen name="index" options={{ title: "" }} />
      <Stack.Screen name="SignInScreen" options={{ title: "" }} />
      <Stack.Screen name="SignUpScreen" options={{ title: "" }} />
      <Stack.Screen name="AcademicDetailsScreen" options={{ title: "" }} />
      <Stack.Screen name="MenuOptionsScreen" options={{ title: "" }} />
      <Stack.Screen name="CheckInOut" options={{ title: "" }} />
      <Stack.Screen name="scanner/Home" options={{ title: "" }} />
      <Stack.Screen name="ScanSuccessful" options={{ title: "" }} />
      <Stack.Screen name="ScanUnsuccessful" options={{ title: "" }} />
      <Stack.Screen name="AttendanceReport" options={{ title: "" }} />
    </Stack>
  );
}
