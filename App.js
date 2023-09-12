import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('No Reponse')


  // const makeRequest = async () => {


  //   const test =  await fetch('http://localhost:3000/')
    
  //   console.log(test);
  //   return test;
  // }
  // const text = makeRequest();

  // console.log(text);

  const getMessage = async () => {
    try {
      const response = await fetch('http://localhost:3000')
      const json = await response.json();
      setMessage(json);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMessage()
  }, [])

  return (
    <View style={styles.container}>
      <Text>PARKING FINDER!!</Text>
      <Text>{message}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
