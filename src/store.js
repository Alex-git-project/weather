import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore,combineReducers} from "redux";
import ImgReducer from "./redusers/ImgReducer";
import CityReducer from "./redusers/CityReducer";

const reducers = combineReducers({
    city:CityReducer
});

const store = createStore(reducers)

export default store
