import { NativeBaseProvider } from 'native-base';
import OrderScreen from './src/Screens/OrderScreen';
import PaymentScreen from './src/Screens/PaymentScreen';
import PlaceOrderScreen from './src/Screens/PlaceOrderScreen';

export default function App() {
  return(
    <NativeBaseProvider>
      <OrderScreen />
    </NativeBaseProvider>
  )
}