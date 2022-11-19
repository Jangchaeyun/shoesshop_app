import { Box, HStack, Input } from 'native-base'
import React from 'react'
import Colors from '../color'
import { FontAwesome5 } from '@expo/vector-icons'
import { Pressable } from 'react-native'

function HomeSearch() {
  return (
    <HStack 
        space={3}
        w="full"
        px={6}
        bg={Colors.main}
        py={4}
        alignItems="center"
        safeAreaTop
    >
        <Input 
            placeholder="나이키, 퓨마, 아디다스 ... "
            w="85%"
            bg={Colors.white}
            type="search"
            variant="filled"
            h={12}
            borderWidth={0}
            _focus={{
                bg:Colors.white,
            }}
         />
         <Pressable ml={3}>
            <FontAwesome5 
                name="shopping-basket" 
                size={24} 
                color={Colors.white}
            />
            <Box 
                px={1} 
                rounded="full" 
                position="absolute"
                top={-13}
                left={2}
                bg={Colors.red}
                _text={{
                    color:Colors.white,
                    fontSize:'11px'
                }}
            >
                5
            </Box>
         </Pressable>
    </HStack>
  )
}

export default HomeSearch
