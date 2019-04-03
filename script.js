getWeather(function (res) {
  console.log(res)
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

updateTime()
setInterval(updateTime, 1000)
