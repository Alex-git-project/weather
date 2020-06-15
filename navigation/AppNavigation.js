import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import SearchComponentTab from "../tabs/SearchComponentTab";
import Start from "../tabs/StrartScreen"
import {connect} from "react-redux";
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DetailsCityTab from "../tabs/DetailsCityTab";

const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator()

function AppNavigation() {

    let createBottomTabs = () => <MaterialBottomTabs.Navigator>
        <Stack.Screen name="cityView" component={DetailsCityTab}/>
    </MaterialBottomTabs.Navigator>;

    return (<NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Start} />
            <Stack.Screen name="addList" component={SearchComponentTab} />
            <Stack.Screen name="cities" component={createBottomTabs} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}
function mapStateToProps(state) {
    return {
        img:state
    }
}
export default connect(mapStateToProps)(AppNavigation);

