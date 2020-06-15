import Config from "../../config";

export default{
    API(lat,lon){
        return fetch('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+Config.apiId)
            .then((res)=>res.json())
            .catch((err)=>err)
    }
}
