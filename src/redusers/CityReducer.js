import * as React from 'react';
import cities from '../../cities.json';

const ADD_CITY = "ADD-CITY";
const SEARCH_CITY = "SEARCH-CITY";
const SET_INPUT_SEARCH = "SET-INPUT-SEARCH";
const CLEAR_MASS_SEARCH = "CLEAR-MASS-SEARCH";
const CLEAR_INPUT_SEARCH = "CLEAR-INPUT-SEARCH"

let initialState = {
    inputSearch:"",
    allCity: [
        "Kyiv",
        "Zhytomyr",
        "London"
    ],
    workCity:[],
    searchCity:[]

};

let filterCity = (state) => {
    let mass = cities.filter( item => item.name.indexOf(state.inputSearch)!== -1);
    return mass
};

const CityReducer =(state = initialState, action) => {
    if (action.type === "ADD-CITY") {
        let mass = state.workCity || [];
        debugger
        if(mass.find(item => item === action.payload)){
            return state
        }else {
            mass.push(action.payload);
            return {...state, workCity: mass};
        }
    } else if (action.type === "SEARCH-CITY") {
        return {...state, searchCity: filterCity(state)};
    }else if (action.type === "SET-INPUT-SEARCH") {
        return {...state, inputSearch: action.payload};
    }else if (action.type === "CLEAR-MASS-SEARCH") {
        return {...state, searchCity: []}
    }else if (action.type === "CLEAR-INPUT-SEARCH") {
        return {...state, inputSearch: ""}
    }{
        return state;
    }
};

export const setCity = (payload) => ({type: ADD_CITY,payload});
export const searchCity = () => ({type: SEARCH_CITY});
export const clearMassSearch = () => ({type: CLEAR_MASS_SEARCH});
export const clearInput = () => ({type: CLEAR_INPUT_SEARCH});
export const setInputSearch = (payload) => ({type: SET_INPUT_SEARCH,payload});

export default CityReducer
