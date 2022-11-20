import {
    Box,
    CheckIcon,
    FormControl,
    Heading,
    Select,
    Text,
    TextArea,
    VStack,
  } from "native-base";
import React, { useState } from 'react';
import Colors from '../color';
import Buttone from "./Buttone";
import Message from './Notfications/Message';
import Rating from './Rating';

export default function Review() {
    const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
        <Heading bold fontSize={15} mb={2}>
            리뷰
        </Heading>
        {/* IF THERE IS NO REVIEW */}
        {/* <Message 
            color={Colors.white}
            bg={Colors.main}
            size={10}
            bold
            children={"리뷰가 없습니다."}
        /> */}
        
        {/* REVIEW */}
        <Box p={3} bg={Colors.deepestGray} mt={5} rounded={5}>
            <Heading fontSize={15} color={Colors.black}>
                화리
            </Heading>
            <Rating value={4} />
            <Text my={2} fontSize={11}>
                2022/11/19
            </Text>
            <Message 
                color={Colors.black}
                bg={Colors.white}
                size={10}
                children={"신발 너무 편해요!! 짱짱~~ 그리고 디자인이 너무 이뻐요!!"}
            />
        </Box>
        {/* WRITE REVIEW */}
        {/* <Box mt={6}>
            <Heading fontSize={15} bold mb={4}>
                제품 리뷰 작성
            </Heading>
            <VStack space={6}>
                <FormControl>
                    <FormControl.Label 
                        _text={{
                            fontSize: "12px",
                            fontWeight: "bold",
                        }}
                    >
                        별점
                    </FormControl.Label>
                    <Select 
                        bg={Colors.subGray} 
                        borderWidth={0} rounded={5} py={3} placeholder="별점을 선택하세요" _selectedItem={{
                            bg:Colors.subGreen,
                            endIcon:<CheckIcon size={3} />,
                        }}
                        selectedValue={ratings}
                        onValueChange={(e) => setRatings(e)}
                    >
                        <Select.Item label="1" value="1" />
                        <Select.Item label="2" value="2" />
                        <Select.Item label="3" value="3" />
                        <Select.Item label="4" value="4" />
                        <Select.Item label="5" value="5" />
                    </Select>
                </FormControl>
                <FormControl>
                    <FormControl.Label 
                        _text={{
                            fontSize: "12px",
                            fontWeight: "bold",
                        }}
                    >
                        리뷰 작성
                    </FormControl.Label>
                    <TextArea
                        h={24} 
                        w="full" 
                        placeholder="리뷰 작성..." 
                        borderWidth={0} 
                        bg={Colors.subGray} 
                        py={4}
                        _focus={{
                            bg:Colors.subGray,
                        }}
                    />
                </FormControl>
                <Buttone bg={Colors.main} color={Colors.white}>
                    작성
                </Buttone>


                {/* IF NOT LOGIN */}
                {/* <Message 
                    color={Colors.black}
                    bg={Colors.lightBlack}
                    size={10}
                    children={"로그인 후 리뷰를 작성해주세요~"}
                />
            </VStack>
        </Box> */}
    </Box>
  );
}