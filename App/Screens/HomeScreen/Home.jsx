import { Button,View, Text,StyleSheet } from 'react-native'
import React from 'react'
export default function Home({route,navigation}) {
    const {MyName} = route.params
    const submit=()=>{
      navigation.navigate('Details')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Button style={styles.title}
        title={MyName}
        onPress={() => submit()}
      />
      <Text style={styles.subtitle}>How Was Your Day!</Text>
    </View>
  )
} 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      color: '#333',
    },
  });
  