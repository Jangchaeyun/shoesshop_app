import React, { useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Orders from "./Orders";
import Profile from "./Profile";
import Colors from "../../color";
import { Text } from "native-base";

const renderScene = SceneMap({
    first: Profile,
    second: Orders,
})

export default function Tabs() {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key:"first",
            title:"PROFILE"
        },
        {
            key:"second",
            title:"OEDERS"
        },
    ]);
    
    const renderTabsBar = (props) => (
        <TabBar 
            {...props}
            tabStyle={styles.tabStyle}
            indicatorStyle={{
                backgroundColor:Colors.lightBlack
            }}
            activeColor={Colors.white}
            inactiveColor={Colors.black}
            renderLabel={({route,color}) => 
                <Text style={{color, ...styles.text}}>{route.title}</Text>
            }
        />
    );
    
  return (
    <TabView 
        navigationState={{index, routes}} 
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width:layout.width}}
        renderTabBar={renderTabsBar}
    />
  );
}

const styles = StyleSheet.create({
    tabStyle:{
        backgroundColor:Colors.lightBlack,
    },
    text: {
        fontSize: 13,
        fontWeight: "bold",
    }
}); 