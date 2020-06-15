import {createStore, combineReducers} from "redux";
import WeatherReducer from "./redusers/WeatherReducer";
import CityReducer from "./redusers/CityReducer";

const reducers = combineReducers({
    city: CityReducer,
    weather: WeatherReducer
});

const store = createStore(reducers);

export default store
