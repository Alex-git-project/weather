import React from 'react'
import { AsyncStorage } from 'react-native';
import {initialCity} from "../src/redusers/CityReducer";

export const setStorage = (state) => {
    (async function () {
        try {
            await AsyncStorage.setItem(
                '@MySuperStore:city',
                JSON.stringify(state)
            );
        } catch (error) {
            console.log(error)
        }
    }());
};

export const getStorage = (dispatch) => {

    (async function () {
        try {
            const result = await AsyncStorage.getItem('@MySuperStore:city');
            if (result !== null) {
                dispatch(initialCity(JSON.parse(result)));
            }
        } catch (error) {
            console.log(1,error)
        }
    }());
};

