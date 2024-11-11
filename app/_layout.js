import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "" }} />
      <Stack.Screen name="Next" options={{ title: "" }} />
      <Stack.Screen
        name="CheckInOut"
        options={{ title: "Scan / Search here!" }}
      />
      <Stack.Screen name="SearchScreen" options={{ title: "SearchScreen" }} />
      <Stack.Screen
        name="ScanSucessfulScreen"
        options={{ title: "ScanSucessfulScreen" }}
      />
    </Stack>
  );
}
