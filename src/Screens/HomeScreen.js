import { Text, View } from 'native-base'
import React from 'react'
import Colors from '../color'
import HomeProducts from '../Components/HomeProducts'
import HomeSearch from '../Components/HomeSearch'

function HomeScreen() {
  return (
    <View flex={1} bg={Colors.white}>
        <HomeSearch />
        <HomeProducts />
    </View>
  )
}

export default HomeScreen
