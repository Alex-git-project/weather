import {useSelector} from 'react-redux'


export const weather = (city) => {
    const state = useSelector(state => state);
    let weatherObjMapApi;
    let weatherObjGidApi;
    let weatherObj;

    try {
        if (state.weather.valueCityMapApi.length > 0 &&
            state.weather.valueCityGridApi.length > 0 &&
            state.weather.valueCityGridApi.length === state.city.workCity.length) {
            weatherObjMapApi = state.weather.valueCityMapApi.find(item => item.name === city);
            weatherObjGidApi = state.weather.valueCityGridApi.find(item => item.location.name === city);
            weatherObj = {
                weatherObjMapApi,
                weatherObjGidApi
            };
            return weatherObj
        } else if (state.weather.valueCityMapApi || state.weather.valueCityGridApi) {
            if(state.weather.valueCityMapApi.length > 0){
                weatherObjMapApi = state.weather.valueCityMapApi.find(item => item.name === city);
            } else if( state.weather.valueCityGridApi.length > 0){
                weatherObjGidApi = state.weather.valueCityGridApi.find(item => item.location.name === city);
            }

            if (weatherObjMapApi !== undefined) {
                return {weatherObjMapApi}
            } else if (weatherObjGidApi !== undefined) {
                return {weatherObjGidApi}
            }
            return null
        }
    } catch (e) {
        return null
    }
};

export const temp = (city) => {
    const obj = weather(city);

    if (obj === null || obj === undefined) return null;
    if (Object.keys(obj).length > 1) {
        let weatherObj = {
            temp_f: obj.weatherObjGidApi.current.temp_f,
            temp_c: obj.weatherObjGidApi.current.temp_c
        };
        return weatherObj
    } else if (Object.keys(obj).length === 1) {
        if (obj.hasOwnProperty('weatherObjMapApi')) {
            return {
                temp_f: Math.round(obj.weatherObjMapApi.main.temp - 273.15)* 9/5 + 32,
                temp_c: Math.round(obj.weatherObjMapApi.main.temp - 273.15)
            }
        }
        if (obj.hasOwnProperty('weatherObjGidApi')) {
            return {
                temp_f: obj.weatherObjGidApi.current.temp_f,
                temp_c: obj.weatherObjGidApi.current.temp_c
            }
        }
    }
    return null
};
