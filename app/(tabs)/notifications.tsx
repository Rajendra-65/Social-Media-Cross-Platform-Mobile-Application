import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { styles } from '../../styles/auth.styles'

export default function Notifications() {
  return (
    <View style = {styles.container}>
      <Link href={"/profile"}>
        Visit Profile Screen
      </Link>
    </View>
  )
}