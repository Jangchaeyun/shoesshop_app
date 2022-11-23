import { NativeBaseProvider } from 'native-base';
import CartScreen from './src/Screens/CartScreen';
import HomeScreen from './src/Screens/HomeScreen';
import NotVerifyScreen from './src/Screens/NotVerifyScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import SingleProductScreen from './src/Screens/SingleProductScreen';
import ShippingScreen from './src/Screens/SippingScreen';

export default function App() {
  return(
    <NativeBaseProvider>
      <ShippingScreen />
    </NativeBaseProvider>
  )
}