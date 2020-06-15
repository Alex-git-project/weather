import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useCallback} from "react";
import * as Location from "expo-location";
import {setCity} from "../src/redusers/CityReducer";
import Service from "../src/service/cityName";

const useService = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const getСoordinates = useCallback(async (setModalVisible) => {
        let location;
        let {status} = await Location.requestPermissionsAsync();
        if (status === 'granted') {
            location = await Location.getCurrentPositionAsync({});
        }
        getCurrentCity(location,setModalVisible)
    }, []);

    const getCurrentCity = (location,setModalVisible) => {
        Service.API(location.coords.latitude, location.coords.longitude).then((json) => {

            checkCity(json)
        }).catch(function(e) {

            setModalVisible(true)
        });
    };

    const checkCity = (obj) => {
        const listCurrentCity = state.city.workCity;
        let fined = () => {
            if (listCurrentCity.length === 0) {
                return true
            } else {
                return !listCurrentCity.find(obj.name)
            }
        };

        if (fined) {
            dispatch(setCity(obj.name))
        }
    };

    return {
        getСoordinates,
        getCurrentCity,
        checkCity
    }
};

export default useService;

