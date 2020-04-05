import Config from "../../config";
//https://samples.openweathermap.org/data/2.5/weather?q='+q+'&appid='+Config.apiId,{mode: 'no-cors'}
//https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=a841ef20a2c34bb78418cb8aa6b583f9
export default{
  API(q){
    return fetch('http://api.openweathermap.org/data/2.5/weather?q='+q+'&APPID='+Config.apiId)
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
  }
}
