
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ScanUnsuccessful = () => {
  const navigation = useNavigation();

  const handleScanAgain = () => {
    navigation.navigate("ScanScreen"); // Replace with your scanning screen name
  };

  return (
    <View className="flex-1 items-center justify-center bg-[#EAEAF9]">
      {/* Cross Icon */}
      <Icon name="times-circle" size={100} color="black" />

      {/* "SCAN UNSUCCESSFUL" Text */}
      <Text className="text-2xl font-bold mt-4 text-black">SCAN UNSUCCESSFUL</Text>
      
      {/* "Not Checked-in" Text */}
      <Text className="text-lg mt-2 text-black">Not Checked-in</Text>

      {/* "Try Again" Button */}
      <TouchableOpacity onPress={handleScanAgain} className="mt-8 px-6 py-3 bg-black rounded-full">
        <Text className="text-white text-lg font-semibold">Try Again</Text>
      </TouchableOpacity>

      {/* "Scan Next ID" Button */}
      <TouchableOpacity onPress={handleScanAgain} className="mt-4 px-6 py-3 bg-black rounded-full">
        <Text className="text-white text-lg font-semibold">Scan Next ID</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScanUnsuccessful;
