const APIURL = "weather.json"

function getWeather(callback) {
  const Http = new XMLHttpRequest()
  Http.open("GET", APIURL)
  Http.send()
  Http.onreadystatechange=(e)=>{
    if (Http.readyState == 4)
      callback(Http.responseText)
  }
}
