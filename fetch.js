
let weather = {
    apiKey: "1f4783ad45dc6205ddc79b6a88a3a6f3",
    fetchData: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city
            + "&appid=" 
            + this.apiKey
            )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    
    displayWeather: function(data){
        const { name } =data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
    }
};


