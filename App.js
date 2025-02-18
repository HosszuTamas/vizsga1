import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import NavBar from "./comps/NavBar";

export default function App() {
  const [users, setUsers] = useState([]);
  const url = 'https://vizsga-55ea5-default-rtdb.europe-west1.firebasedatabase.app/';
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(res => {
      console.log(res.data)
      setUsers(res.data)
    })
    .catch( err => alert(err))
  }, []);
  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
    //<View style={styles.container}>
      //<Text>jjj</Text>
      //<StatusBar style="auto" />
    //</View>
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
