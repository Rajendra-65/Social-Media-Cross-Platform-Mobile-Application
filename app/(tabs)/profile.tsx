import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { styles } from '../../styles/auth.styles'

export default function Profile() {
  return (
    <View style = {styles.container}>
        <Link href = "/profile">Visit Profile</Link>
    </View>
  )
}