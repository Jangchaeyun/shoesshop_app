import { NativeBaseProvider } from 'native-base';
import HomeScreen from './src/Screens/HomeScreen';
import NotVerifyScreen from './src/Screens/NotVerifyScreen';

export default function App() {
  return(
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  )
}