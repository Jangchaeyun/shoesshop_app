import { NativeBaseProvider } from 'native-base';
import CartScreen from './src/Screens/CartScreen';
import HomeScreen from './src/Screens/HomeScreen';
import NotVerifyScreen from './src/Screens/NotVerifyScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import SingleProductScreen from './src/Screens/SingleProductScreen';

export default function App() {
  return(
    <NativeBaseProvider>
      <ProfileScreen />
    </NativeBaseProvider>
  )
}