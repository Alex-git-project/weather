const ADD_CITY = "SET-CITY";
const ADD_CITY_VALUE_MAP_API = "ADD-CITY-VALUE-MAP-API";
const ADD_CITY_VALUE_GRID_API = "ADD-CITY-VALUE-GRID-API";
const SET_TYPE_TEMP = "SET-TYPE-TEMP";
const DELETE_CITY_VALUE = "DELETE-CITY-VALUE";

let initialState = {
    currentCity:"",
    valueCityMapApi:[],
    valueCityGridApi:[],
    typeTemp: true
};

const WeatherReducer =(state = initialState, action) => {
    if (action.type === "SET-CITY") {
        return {...state, currentCity: action.payload};
    }if (action.type === "ADD-CITY-VALUE-MAP-API") {
        return {...state, valueCityMapApi: action.payload};
    } if (action.type === "ADD-CITY-VALUE-GRID-API") {
        return {...state, valueCityGridApi: action.payload};
    } else if (action.type === "SET-TYPE-TEMP"){
        return {...state, typeTemp: action.payload}
    }else if (action.type === "DELETE-CITY-VALUE"){
        debugger
        const newMap = state.valueCityMapApi.filter( item => item.name !== action.payload);
        const newGrid = state.valueCityGridApi.filter( item => item.location.name !== action.payload);

        return {...state, valueCityMapApi: newMap,valueCityGridApi:newGrid}
    }else  {
        return state;
    }
};

export const addCity = (nameCity) => ({type: ADD_CITY,payload:nameCity});
export const setValueCityMapApi = (data) => ({type: ADD_CITY_VALUE_MAP_API,payload:data});
export const setValueCityGridApi = (data) => ({type: ADD_CITY_VALUE_GRID_API,payload:data});
export const setTypeTemp = (payload) => ({type: SET_TYPE_TEMP,payload});
export const deleteValueApi = (payload) => ({type: DELETE_CITY_VALUE,payload});

export default WeatherReducer
