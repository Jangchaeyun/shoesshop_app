import { Button, Center, HStack, Modal, Text, VStack } from 'native-base';
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

const PlaceOrderModel = () => {
    const [showModel, setShowModel] = useState(false)
  return (
    <Center>
      <Buttone
        onPress={() => setShowModel(true)}
        bg={Colors.black}
        color={Colors.white}
        mt={5}
      >
        총 금액 보기
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
                <Button
                    flex={1}
                    bg={Colors.main}
                    h={45}
                    _text={{
                        color:Colors.white,
                    }}
                    onPress={() => setShowModel(false)}
                    _pressed={{
                        bg:Colors.main,  
                    }}
                >
                    주문하기
                </Button>
            </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}

export default PlaceOrderModel;
