export default{
  API(){
    return fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json')
    .then((res)=>res.json())
  }
}
