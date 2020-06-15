import Config from "../../config";

export default{
  API(q){
    return fetch('http://api.openweathermap.org/data/2.5/weather?q='+q+'&APPID='+Config.apiId)
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
  }
}
