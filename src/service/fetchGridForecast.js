import Config from "../../config";

export default{
  API(city){
    return fetch(`http://api.weatherapi.com/v1/current.json?key=${Config.apiGridForecast}&q=${city}`)
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
  }
}
