import 'dotenv/config'

if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition((locationData)=>{
        const location = locationData.coords
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.API_KEY}`
        )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(err=>console.error(err))

        // console.log(weather)
    }, console.log);
} 
