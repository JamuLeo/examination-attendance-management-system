import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack> <Stack.Screen  name="index" options={{ title: '' }} />
      <Stack.Screen name="MenuOptionsScreen" options={{ title: '' }} />
      <Stack.Screen name="SignInScreen" options={{ title: '' }} />
      <Stack.Screen name="AcademicDetailsScreen" options={{ title: '' }} />
      <Stack.Screen
        name="CheckInOut"
        options={{ title: "" }}
      />
      <Stack.Screen name="SearchScreen" options={{ title: "SearchScreen" }} />
      <Stack.Screen
        name="ScanSucessfulScreen"
        options={{ title: "ScanSucessfulScreen" }}
      />
    </Stack>
  );
}
