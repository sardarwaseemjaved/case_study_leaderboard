import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';

import store from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="auto" />
      <Provider store={store}>
        <HomeScreen />
      </Provider>
      {/* <Text className="text-gray-50 font-extrabold"> 4S86G2rs Open up App.js to start working on your app!</Text> */}
    </SafeAreaView>
  );
} 
