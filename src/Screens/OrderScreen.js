import { Box, Heading, ScrollView, Text, View } from 'native-base'
import React from 'react'
import Colors from '../color'
import OrderInfo from '../Components/OrderInfo';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import OrderIterm from '../Components/OrderIterm';
import OrderModel from '../Components/OrderModel';

function OrderScreen() {
  return (
    <Box 
      bg={Colors.subGray}
      flex={1}
      safeAreaTop
      pt={6}
    >  
      <Box>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <OrderInfo 
            title="주문 정보"
            success
            subTitle="배송지: 부천시"
            text="결제 방법: Paypal"
            icon={
              <FontAwesome5 
                name="shipping-fast" 
                size={30}
                color={Colors.white} 
              />
            }
          />
          <OrderInfo 
            title="배송 정보"
            subTitle="주소: "
            danger
            text="조마루로 105번길 8-8 3층"
            icon={
              <Ionicons
                name="location" 
                size={30}
                color={Colors.white} 
              />
            }
          />
        </ScrollView>
      </Box>
      {/* Order Iterm */}
      <Box
          px={6}
          flex={1}
          pb={3}
        >
          <Heading
            bold
            fontSize={15}
            isTruncated
            my={4}
          >
            제품
          </Heading>
          <OrderIterm />
          {/* Total */}
          <OrderModel />
        </Box>
    </Box>
  )
}

export default OrderScreen
