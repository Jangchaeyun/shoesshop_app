import { Center, Heading, Image, Text } from 'native-base'
import React from 'react'
import Colors from '../color'
import Tabs from '../Components/Profile/Tabs'

function ProfileScreen() {
  return (
    <>
        <Center
          bg={Colors.black}
          pt={10}
          pb={6}
        >
          <Image
            source={{
              uri : "https://ifh.cc/g/9aJXXT.png"
            }}
            alt="profile"
            w={24}
            h={24}
            resizeMode="cover"
          />
          <Heading 
            bold
            fontSize={15}
            isTruncated
            my={2}
            color={Colors.white}
          >
            장채윤
          </Heading>
          <Text
            italic
            fontSize={10}
            color={Colors.white}
          >
            가입 날짜 : 2022/11/21
          </Text>
        </Center>
        {/* TABS */}
        <Tabs />
    </>
  )
}

export default ProfileScreen;
