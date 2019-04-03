const APIURL = "https://samples.openweathermap.org/data/2.5/weather?q=Lyon,fr&appid=b6907d289e10d714a6e88b30761fae22"

function getWeather(callback) {
  const Http = new XMLHttpRequest()
  Http.open("GET", APIURL)
  Http.send()
  Http.onreadystatechange=(e)=>{
    console.log(e)
    callback(Http.responseText)
  }
}
