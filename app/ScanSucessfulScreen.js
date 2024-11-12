import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Make sure to install this package if you don't have it
import { useNavigation } from '@react-navigation/native'; // If using navigation

const ScanSuccessful = () => {
  const navigation = useNavigation();

  const handleScanNextID = () => {
    // Navigate to ScanScreen or reset the scanning process
    navigation.navigate("ScanScreen"); // Replace "ScanScreen" with the actual screen name for scanning
  };

  return (
    <View className="flex-1 items-center justify-center bg-[#EAEAF9]">
      {/* Tick Icon */}
      <Icon name="check-circle" size={100} color="black" />
      
      {/* "SCAN SUCCESSFUL" Text */}
      <Text className="text-2xl font-bold mt-4 text-black">SCAN SUCCESSFUL</Text>
      
      {/* "Checked-in" Text */}
      <Text className="text-lg mt-2 text-black">Checked-in</Text>

      {/* "Scan Next ID" Button */}
      <TouchableOpacity onPress={handleScanNextID} className="mt-8 px-6 py-3 bg-black rounded-full">
        <Text className="text-white text-lg font-semibold">Scan Next ID</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScanSuccessful;