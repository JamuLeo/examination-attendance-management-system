import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const index = () => {
  return (
    <View>
      <Link href="/MenuOptionsScreen">
      <Text>index</Text>
      </Link>
      
    </View>
  )
}

export default index