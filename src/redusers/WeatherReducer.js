import * as actionType from './actionsTypes';

let initialState = {
    currentCity:"",
    valueCityMapApi:[],
    valueCityGridApi:[],
    typeTemp: true
};

export const addCity = (nameCity) => ({type: actionType.ADD_CITY_DATA,payload:nameCity});
export const setValueCityMapApi = (data) => ({type: actionType.ADD_CITY_VALUE_MAP_API,payload:data});
export const setValueCityGridApi = (data) => ({type: actionType.ADD_CITY_VALUE_GRID_API,payload:data});
export const setTypeTemp = (payload) => ({type: actionType.SET_TYPE_TEMP,payload});
export const deleteValueApi = (payload) => ({type: actionType.DELETE_CITY_VALUE,payload});

const WeatherReducer =(state = initialState, {payload,type}) => {
    switch(type) {
        case "SET-CITY":
            return {...state, currentCity: payload};
        case "ADD-CITY-VALUE-MAP-API":
            return {...state, valueCityMapApi: payload};
        case "ADD-CITY-VALUE-GRID-API":
            return {...state, valueCityGridApi: payload};
        case "SET-TYPE-TEMP":
            return {...state, typeTemp: payload};
        case "DELETE-CITY-VALUE":
            const newMap = state.valueCityMapApi.filter( item => item.name !== payload);
            const newGrid = state.valueCityGridApi.filter( item => item.location.name !== payload);
            return {...state, valueCityMapApi: newMap,valueCityGridApi:newGrid}
        default:
            return state
    }
};

export default WeatherReducer
