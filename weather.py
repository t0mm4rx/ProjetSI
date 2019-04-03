import time
import requests

API = "https://api.openweathermap.org/data/2.5/weather?appid=77d4b14c8aa6e7d25da6b2aebe4c33b7&q=Lyon&units=metric&lang=fr"

while True:

    r = requests.get(API).text
    with open("weather.json", "w+") as file:
        file.write(r)

    time.sleep(60)
