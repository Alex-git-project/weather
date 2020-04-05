import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import tab2 from "../tabs/tab2";
import Start from "../screens/StrartScreen"
import {connect} from "react-redux";
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

function AppNavigation() {
    return (<NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Start} />
            <Stack.Screen name="addList" component={tab2} />
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

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from "@react-navigation/drawer";
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//
// import React from "react";
// import HomeScreen from "../screens/HomeScreen";
// import tab1 from "../tabs/tab1";
// import tab2 from "../tabs/tab2";
// import {connect} from "react-redux";
//
//
// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// const MaterialTopTabs = createMaterialTopTabNavigator()
// const MaterialBottomTabs = createMaterialBottomTabNavigator()
//
// function AppNavigation(props) {
//
//     let homeScreen = () => <Stack.Navigator>
//         <Stack.Screen name="HomeScreen" component={HomeScreen}/>
//     </Stack.Navigator>
//
//     let createTopTabs = () => <MaterialTopTabs.Navigator>
//         <Stack.Screen name="HomeScreen" component={HomeScreen}/>
//     </MaterialTopTabs.Navigator>
//
//     let createBottomTabs = () => <MaterialBottomTabs.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen}/>
//         <Stack.Screen name="View Img" component={tab1}/>
//     </MaterialBottomTabs.Navigator>
//
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator>
//                 <Drawer.Screen name="Home" component={createBottomTabs}/>
//                 <Drawer.Screen name="View Img" component={tab1}/>
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// }
//
// function mapStateToProps(state) {
//     return {
//         img:state
//     }
// }
//
// export default connect(mapStateToProps)(AppNavigation);
