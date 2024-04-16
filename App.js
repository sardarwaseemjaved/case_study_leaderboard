import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="auto" />
      <HomeScreen />
      {/* <Text className="text-gray-50 font-extrabold"> 4S86G2rs Open up App.js to start working on your app!</Text> */}
    </SafeAreaView>
  );
} 
