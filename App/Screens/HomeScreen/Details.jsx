import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Age:22</Text>
      <Text style={styles.title}>Gender:Female</Text>
      <Text style={styles.title}>Mood:Always Angry</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      padding: 20,
      // Added a gradient background color
      backgroundImage: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      // Changed the color to a darker shade of purple
      color: '#663399',
    },
    subtitle: {
      fontSize: 18,
      // Changed the color to a lighter shade of purple
      color: '#b19cd9',
    },
  });
  