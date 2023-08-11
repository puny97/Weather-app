let dateFormat = new Date().toDateString();
date.innerHTML = dateFormat;

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4c1e932080msh4b902d5764639cbp1e333djsn0e640c5f476a',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
}


const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then((response) => {
            return response.json()
        }).then((response) => {
            temp.innerHTML = response.temp
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            wind_speed.innerHTML = response.wind_speed
            humidity.innerHTML = response.humidity
            wind_degrees.innerHTML = response.wind_degrees
            feels_like.innerHTML = response.feels_like
            // console.log(response);
        }).catch(error => {
            console.error(error);
        })
}

getWeather("Bangalore");

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

const nagpur = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Nagpur', options)
    .then((response) => {
        return response.json()
    }).then((response) => {
        nagpur_low.innerHTML = response.min_temp
        nagpur_high.innerHTML = response.max_temp
        nagpur_humidity.innerHTML = response.humidity
        nagpur_windspeed.innerHTML = response.wind_speed
    }).catch(error => {
        console.log(error);
    })

    const lucknow = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then((response) => {
        return response.json()
    }).then((response) => {
        lucknow_low.innerHTML = response.min_temp
        lucknow_high.innerHTML = response.max_temp
        lucknow_humidity.innerHTML = response.humidity
        lucknow_windspeed.innerHTML = response.wind_speed
    }).catch(error => {
        console.log(error);
    })

    const mumbai = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
    .then((response) => {
        return response.json()
    }).then((response) => {
        mumbai_low.innerHTML = response.min_temp
        mumbai_high.innerHTML = response.max_temp
        mumbai_humidity.innerHTML = response.humidity
        mumbai_windspeed.innerHTML = response.wind_speed
    }).catch(error => {
        console.log(error);
    })

    const delhi = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    .then((response) => {
        return response.json()
    }).then((response) => {
        delhi_low.innerHTML = response.min_temp
        delhi_high.innerHTML = response.max_temp
        delhi_humidity.innerHTML = response.humidity
        delhi_windspeed.innerHTML = response.wind_speed
    }).catch(error => {
        console.log(error);
    })

    const surat = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Surat', options)
    .then((response) => {
        return response.json()
    }).then((response) => {
        surat_low.innerHTML = response.min_temp
        surat_high.innerHTML = response.max_temp
        surat_humidity.innerHTML = response.humidity
        surat_windspeed.innerHTML = response.wind_speed
    }).catch(error => {
        console.log(error);
    })
