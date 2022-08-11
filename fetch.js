
let weather = {
    apiKey: "1f4783ad45dc6205ddc79b6a88a3a6f3",
    fetchData: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + London 
            + "&appid=" 
            + this.appKey
            )
        .then((response) => response.json())
        .then((data) => console.log(data))
    },
//unfinished
    displayWeather: function(data){

    }
};


