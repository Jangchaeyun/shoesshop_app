import { Box, Center, Image, VStack } from 'native-base'
import React from 'react'
import Colors from '../color'
import Buttone from '../Components/Buttone'

function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
        <Center w="full" h={250}>
          <Image
            source={require("../../assets/favicon.png")}
            alt="Logo"
            size="lg"
          />
        </Center>
        <VStack space={6} px={5} alignItems="center">
          <Buttone bg={Colors.white} color={Colors.black}>
            회원가입
          </Buttone>
          <Buttone bg={Colors.deepestGray} color={Colors.black}>
            로그인
          </Buttone>
        </VStack>
    </Box>
  );
}

export default NotVerifyScreen;
