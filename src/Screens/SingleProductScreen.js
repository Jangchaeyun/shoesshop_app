import { Box, Heading, HStack, Image, ScrollView, Spacer, Text, View } from 'native-base'
import React, { useState } from 'react'
import NumericInput from 'react-native-numeric-input'
import Colors from '../color'
import Buttone from '../Components/Buttone'
import Rating from '../Components/Rating'
import Review from '../Components/Review'

function SingleProductScreen() {
  const [value, setValue] = useState(0);
  return (
    <Box 
      safeArea 
      flex={1} 
      bg={Colors.white}
    >
      <ScrollView 
        px={5} 
        showsVerticalScrollIndicator={false}
      >
        <Image 
          source={require("../../assets/images/shoes1.png")} 
          alt="Image" 
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          새로운 내셔널지오그래픽 신발
        </Heading>
        <Rating value={4} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput 
            value={value} 
            totalWidth={140} 
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.lightBlack}
            rounded
            textColor={Colors.black}
            iconStyle={{ color:Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            159000원
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          근력 운동과 헬스 트레이닝을 새로운 차원으로 끌어올리는 아디다스 슈즈를 만나보세요. 지면과 맞닿은 느낌을 주는 낮은 미드솔이 정확한 자세를 잡을 수 있도록 도와주고 동작에 자신감을 더해줍니다. 두 가지 밀도로 구성된 EVA 쿠셔닝이 뒤꿈치에 안정감을 전달하는 동시에 앞발을 편안하게 받쳐줍니다. 갑피에 최소 50% 이상의 재생 원료가 함유되어 있으며, 플라스틱 폐기물을 없애기 위한 친환경 솔루션의 일환으로 제작된 제품입니다.
        </Text>
        <Buttone bg={Colors.main} color={Colors.white} mt={10}>
          장바구니 추가
        </Buttone>

        {/* REVIEW */}
        <Review />
      </ScrollView>
    </Box>
  )
}

export default SingleProductScreen
