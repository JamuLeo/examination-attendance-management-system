import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
  
      <Stack.Screen  name="index" options={{ title: '' }} />
      <Stack.Screen name="Next" options={{ title: '' }} />
      <Stack.Screen name="MenuOptionsScreen" options={{ title: '' }} />

    </Stack>
  );
}
