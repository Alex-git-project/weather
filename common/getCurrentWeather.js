import {weather, temp} from "./getTemp";

export const getCurrentWeather = (city) => {
    const weatherObjs = weather(city);
    const currentTemp = temp(city);

    const initialWeatherForecast = {
        humidity: {
            value: weatherObjs?.weatherObjGidApi?.current?.humidity ?
                (weatherObjs?.weatherObjGidApi?.current?.humidity + weatherObjs?.weatherObjMapApi?.main?.humidity) / 2 :
                weatherObjs?.weatherObjMapApi?.main?.humidity,
            title: "HUMIDITY"
        },
        pressure: {
            value: weatherObjs?.weatherObjGidApi?.current?.pressure_mb ?
                (weatherObjs?.weatherObjGidApi?.current?.pressure_mb + weatherObjs?.weatherObjMapApi?.main?.pressure) / 2 :
                weatherObjs.weatherObjMapApi.main.pressure,
            title: "PRESSURE"
        },
        wind: {
            value: weatherObjs?.weatherObjGidApi?.current?.wind_mph ?
                (weatherObjs?.weatherObjGidApi?.current?.wind_mph + weatherObjs?.weatherObjMapApi?.wind?.speed) / 2 :
                weatherObjs?.weatherObjMapApi?.wind?.speed
            ,
            title: "WIND"
        },
        temp_c: {
            value: currentTemp?.temp_c || "",
            title: "TEMP.C"
        },
        temp_f: {
            value: currentTemp?.temp_f || "",
            title: "TEMP.F"
        },
        feels_like: {
            value: weatherObjs?.weatherObjMapApi?.main?.feels_like || "",
            title: "FEELS"
        },
         name: weatherObjs.weatherObjGidApi ? weatherObjs.weatherObjGidApi.location.name :
             weatherObjs.weatherObjMapApi.name ,
         time: weatherObjs?.weatherObjGidApi?.location.localtime.split(" ") || "",
    };

    const typeWeather = {
        type: weatherObjs?.weatherObjMapApi?.weather[0].main
    };

    return {initialWeatherForecast,typeWeather}
};
