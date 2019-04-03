String.prototype.ucFirst=function(){return this.substr(0,1).toUpperCase()+this.substr(1);}
getWeather(function (res) {
  updateWeather(JSON.parse(res))
})

function fillZero(a) {
  if (a < 10)
    return '0' + a
  return a
}

function updateTime() {
  a = new Date()
  strTime = fillZero(a.getHours()) + ":" + fillZero(a.getMinutes())/* + ":" + fillZero(a.getSeconds())*/
  strDate = fillZero(a.getDate()) + "/" + fillZero(a.getMonth()+1) + "/" + fillZero(a.getFullYear())
  document.querySelector('#time').innerHTML = strTime
  document.querySelector('#date').innerHTML = strDate
}

function updateWeather(obj) {
  console.log(obj)
  document.querySelector("#temp").innerText = Math.ceil(obj.main.temp)
  document.querySelector("#weather-desc").innerText = obj.weather[0].description.ucFirst() + "."
}

updateTime()
setInterval(updateTime, 1000)
