import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
  
      <Stack.Screen  name="Index" options={{ title: '' }} />
      <Stack.Screen name="AcademicDetailsScreen" options={{ title: '' }} />
    </Stack>
  );
}