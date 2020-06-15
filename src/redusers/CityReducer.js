import * as React from 'react';

const ADD_CITY = "ADD-CITY";
const SEARCH_CITY = "SEARCH-CITY";
const SET_INPUT_SEARCH = "SET-INPUT-SEARCH";
const CLEAR_MASS_SEARCH = "CLEAR-MASS-SEARCH";
const CLEAR_INPUT_SEARCH = "CLEAR-INPUT-SEARCH";
const DELETE_CITY = "DELETE-CITY";
const SET_ALL_CITY = "SET-ALL-CITY";

let initialState = {
    inputSearch:"",
    workCity:[],
    searchCity:[],
    listAllCity:[]
};

let filterCity = (state) => {
    let nameCity = state.inputSearch;
    nameCity = nameCity[0].toUpperCase() + nameCity.slice(1);
    let data = Object.values(state.listAllCity).flat();
    let currentValues = data.filter( (item) => item.indexOf(nameCity)!== -1);
    return currentValues
};

const CityReducer =(state = initialState, action) => {
    if (action.type === "ADD-CITY") {
        let mass = state.workCity || [];
        if(mass.find(item => item === action.payload)){
            return state
        }else if(state.workCity.length > 5) {
            return state
        }
        else {
            mass.push(action.payload);
            return {...state, workCity: mass};
        }
    } else if (action.type === "SEARCH-CITY") {
        return {...state, searchCity: filterCity(state)};
    }else if (action.type === "DELETE-CITY") {
        const index = state.workCity.indexOf(action.payload);
        const updatedCity = state.workCity;
        updatedCity.splice(index,1);
        return {...state, workCity: updatedCity};
    }else if (action.type === "SET-INPUT-SEARCH") {
        return {...state, inputSearch: action.payload};
    }else if (action.type === "CLEAR-MASS-SEARCH") {
        return {...state, searchCity: []}
    }else if (action.type === "CLEAR-INPUT-SEARCH") {
        return {...state, inputSearch: ""}
    }else if (action.type === "SET-ALL-CITY") {
        return {...state, listAllCity: action.payload}
    } else {
        return state
    }
};

export const setCity = (payload) => ({type: ADD_CITY,payload});
export const searchCity = () => ({type: SEARCH_CITY});
export const clearMassSearch = () => ({type: CLEAR_MASS_SEARCH});
export const clearInput = () => ({type: CLEAR_INPUT_SEARCH});
export const setInputSearch = (payload) => ({type: SET_INPUT_SEARCH,payload});
export const deleteCity = (payload) => ({type: DELETE_CITY,payload});
export const setAllCity = (payload) => ({type: SET_ALL_CITY,payload});

export default CityReducer
