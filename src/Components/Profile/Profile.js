import { Box, FormControl, Input, ScrollView, VStack } from 'native-base';
import React from 'react';
import Colors from '../../color';
import Buttone from '../Buttone';

const Inputs = [
  {
    label: "이름",
    type: "text",
  },
  {
    label: "이메일",
    type: "text",
  },
  {
    label: "새로운 비밀번호",
    type: "password",
  },
  {
    label: "비밀번호 확인",
    type: "password",
  },
]

const Profile = () => {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {
            Inputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize:'12px',
                    fontWeight: "bold",
                  }}  
                >
                  {i.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  bg={Colors.subGray}
                  borderColor={Colors.main}
                  py={4}
                  type={i.type}
                  color={Colors.main}
                  fontSize={15}
                  _focus={{
                    bg:Colors.subGray, 
                    borderColor:Colors.main,
                    borderWidth: 1,
                  }}
                />
              </FormControl>
            ))
          }
          <Buttone
            bg={Colors.main}
            color={Colors.white}
          >
            프로필 업데이트
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
}

export default Profile;
