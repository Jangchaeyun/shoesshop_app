import { Box, HStack, ScrollView, Text, Button } from 'native-base';
import React from 'react';
import { Pressable } from 'react-native';
import Colors from '../../color';

const Order = () => {
  return (
    <Box 
      h='full'
      bg={Colors.white}
      pt={5}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Paid Order */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between" 
            alignItems="center"
            bg={Colors.deepGray}
            px={5}
            py={2}
          >
            <Text 
              fontSize={9} 
              color={Colors.blue} 
              isTruncated
            >
              1234567890
            </Text>
            <Text 
              fontSize={12} 
              bold
              color={Colors.black} 
              isTruncated
            >
              결제완료
            </Text>
            <Text 
              fontSize={11} 
              italic
              color={Colors.black} 
              isTruncated
            >
              2022.11.22
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{
                color:Colors.white
              }}
              _pressed={{
                bg:Colors.main
              }}
            >
              99000원
            </Button>
          </HStack>
        </Pressable>
        {/* Not Paid */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between" 
            alignItems="center"
            px={5}
            py={2}
          >
            <Text 
              fontSize={9} 
              color={Colors.blue} 
              isTruncated
            >
              1234567890
            </Text>
            <Text 
              fontSize={12} 
              bold
              color={Colors.black} 
              isTruncated
            >
              결제 미완료
            </Text>
            <Text 
              fontSize={11} 
              italic
              color={Colors.black} 
              isTruncated
            >
              2022.11.23
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.red}
              _text={{
                color:Colors.white
              }}
              _pressed={{
                bg:Colors.red
              }}
            >
              99000원
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
}

export default Order;
