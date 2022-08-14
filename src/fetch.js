import 'dotenv/config'
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const description = document.querySelector('.description')
const humidity = document.querySelector('.humidity')
const windspeed= document.querySelector('.windspeed')




if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition((locationData)=>{
        const location = locationData.coords
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.API_KEY}`
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const {icon}=data.weather[0]
            city.innerHTML= data.name
            const temper =data.main.temp - 273.15
            temp.innerHTML= temper.toFixed(2)
            description.innerHTML= data.weather[0].main
            document.querySelector('.icon').src ="http://openweathermap.org/img/wn/" +icon+ ".png"
            humidity.innerHTML= "Humidity: " + data.main.humidity
            windspeed.innerHTML= "Wind speed: " + data.wind.speed + "km/hr"




        })
        .catch(err=>console.error(err))

        // console.log(weather)
    }, console.log);
} 
