import { useNavigation } from '@react-navigation/native';
import { Button, Center, HStack, Image, Modal, Pressable, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import Colors from '../color';
import Buttone from './Buttone';

const OrdersInfos = [
    {
        title: "제품 가격",
        price: 223370,
        color:"black"
    },
    {
        title: "배송비",
        price: 0,
        color: "black"
    },
    {
        title: "총액",
        price: 223370,
        color: "red"
    }
]

const OrderModel = () => {
    const navigation = useNavigation()
    const [showModel, setShowModel] = useState(false)
  return (
    <Center>
      <Buttone
        onPress={() => setShowModel(true)}
        bg={Colors.main}
        color={Colors.white}
        mt={5}
      >
        결제 및 총액 표시
      </Buttone>
      <Modal
        isOpen={showModel}
        onClose={() => setShowModel(false)}
        size="lg"
      >
        <Modal.Content
            maxWidth={350}
        >
            <Modal.CloseButton />
            <Modal.Header>주문</Modal.Header>
            <Modal.Body>
                <VStack
                    space={7}
                >
                    {OrdersInfos.map((i, index) => (
                        <HStack
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Text
                                fontWeight="medium"
                            >
                                {i.title}
                            </Text>
                            <Text
                                color={ i.color === "red" ? Colors.red : Colors.black }
                                bold
                            >
                                {i.price}원
                            </Text>
                        </HStack>
                    ))}
                </VStack>
            </Modal.Body>
            <Modal.Footer>
                <Pressable
                    w="full"
                    justifyContent="center"
                    bg={Colors.paypal}
                    h={45}
                    rounded={3}
                    overflow="hidden"
                    onPress={
                        () => setShowModel(false)
                    }
                >
                    <Image
                        source={require("../../assets/images/paypal.png")}
                        alt="paypal"
                        resizeMode="contain"
                        w="full"
                        h={34}
                    />
                </Pressable>
                <Button
                    w="full"
                    mt={4}
                    bg={Colors.main}
                    h={45}
                    _text={{
                        color:Colors.white,
                    }}
                    onPress={() => {
                        navigation.navigate("Home")
                        setShowModel(false)
                    }}
                    _pressed={{
                        bg:Colors.black,  
                    }}
                >
                    나중에 결제하기
                </Button>
            </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}

export default OrderModel;
