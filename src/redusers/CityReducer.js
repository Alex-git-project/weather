import * as React from 'react';
import * as actionType from './actionsTypes';
import {setStorage} from '../../common/setStorage'

const initialState = {
    inputSearch:"",
    workCity:[],
    searchCity:[],
    listAllCity:[]
};

export const setCity = (payload) => ({type: actionType.ADD_CITY,payload});
export const searchCity = () => ({type: actionType.SEARCH_CITY});
export const clearMassSearch = () => ({type: actionType.CLEAR_MASS_SEARCH});
export const clearInput = () => ({type: actionType.CLEAR_INPUT_SEARCH});
export const setInputSearch = (payload) => ({type: actionType.SET_INPUT_SEARCH,payload});
export const deleteCity = (payload) => ({type: actionType.DELETE_CITY,payload});
export const setAllCity = (payload) => ({type: actionType.SET_ALL_CITY,payload});
export const initialCity = (payload) => ({type: actionType.INITIAL_CITY,payload});

const filterCity = (state) => {
    let nameCity = state.inputSearch;
    nameCity = nameCity[0].toUpperCase() + nameCity.slice(1);
    let data = Object.values(state.listAllCity).flat();
    let currentValues = data.filter( (item) => item.indexOf(nameCity)!== -1);
    return currentValues
};

const addCityFunction = (payload , state) => {
    let mass = state.workCity || [];
    if(mass.find(item => item === payload)){
        return state
    }else if(state.workCity.length > 5) {
        return state
    }
    else {
        mass.push(payload);
        setStorage(mass);
        return {...state, workCity: mass};
    }
};

const deleteFunction = (payload, state) => {
    const index = state.workCity.indexOf(payload);
    const updatedCity = state.workCity;
    updatedCity.splice(index,1);
    setStorage(updatedCity);
    return {...state, workCity: updatedCity};
};

const CityReducer =(state = initialState, action) => {
    switch(action.type) {
        case "ADD-CITY":
            return addCityFunction(action.payload, state);
        case "SEARCH-CITY":
            return {...state, searchCity: filterCity(state)};
        case "DELETE-CITY":
            return deleteFunction(action.payload, state);
        case "SET-INPUT-SEARCH":
            return {...state, inputSearch: action.payload};
        case "CLEAR-MASS-SEARCH":
            return {...state, searchCity: []};
        case "SET-ALL-CITY":
            return {...state, listAllCity: action.payload};
        case "INITIAL-CITY":
            return {...state, workCity: action.payload};
        default:
            return state
    }
};


export default CityReducer
