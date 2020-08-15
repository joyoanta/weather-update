document.getElementById("search_temp").addEventListener("click", function () {
    const cityValue = document.getElementById("city_value").value;
    if (cityValue == "" || cityValue == null) {
        alert("Enter City Name");
    }
    else {
        getWeatherData(cityValue);
    }


})


function getWeatherData(city) {
// const getWeatherData = city => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a97ebc68918f1d569522d2604dac67e2`)
        .then(response => response.json())
        .then(data => {
            const cityName = document.getElementById("city_name");
            const currentTemp = document.getElementById("current_temp");
            const currentWeather = document.getElementById("description");
            cityName.innerText = (data['name']);
            const temp = (data['main']['temp'] - 273.15);
            currentTemp.innerText = temp.toFixed(1);
            currentWeather.innerText = data['weather'][0]['description'];

            const iconCode = data['weather'][0]['icon'];
            const iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";
            document.getElementById("icon").src = iconUrl;

            

        })
        .catch(error => alert('Wrong City Name!'))
}

    
    
    
    
    
    
    
    
    
    
    
    
    // document.getElementById('search-button').addEventListener('click', function(){
    //   const inputArea  =   document.getElementById('input-area').value ; 

    //   if (inputArea == ''){

    //     alert ('Enter a city name')
    //   }

    //   else {

    //     cityInfo(inputArea); 
    //   }

    // })


    //   const cityInfo =  city => {

    //     fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=a223aade8419d5c45508b34cd254ce0f` )

    //     .then (response => response.json())
    //     .then (data => {

    //     const cityName = document.getElementById('place');
    //     const temparture = document.getElementById('temp-display');
    //     const climate = document.getElementById('climate'); 


    //     cityName.innerText = data['name'];
    //     temparture.innerText = (data['main']['temp'] - 273.15).toFixed(1);
    //     climate.innerText = (data ['weather'][0]['description'])


    //     const iconCode = data['weather'][0]['icon'];
    //     const iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";
    //     document.getElementById("icon").src = iconUrl;

    //         })
    //         .catch(error => alert('Wrong City Name!'))
    //   }




    //   document.getElementById("search_temp").addEventListener("click", function () {
    //     const cityValue = document.getElementById("city_value").value;
    //     if (cityValue == "") {
    //         alert("Enter City Name");
    //     }
    //     else {
    //         getWeatherData(cityValue);
    //     }


    // })
    // const getWeatherData = city => {
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a97ebc68918f1d569522d2604dac67e2`)
    //         .then(response => response.json())
    //         .then(data => {
    //             const cityName = document.getElementById("city_name");
    //             const currentTemp = document.getElementById("current_temp");
    //             const currentWeather = document.getElementById("description");
    //             cityName.innerText = data['name'];
    //             const temp = (data['main']['temp'] - 273.15);
    //             currentTemp.innerText = temp.toFixed(1);
    //             currentWeather.innerText = data['weather'][0]['description'];

    //             const iconCode = data['weather'][0]['icon'];
    //             const iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";
    //             document.getElementById("icon").src = iconUrl;
    //         })
    //         .catch(error => alert('Wrong City Name!'))
    // }

      
        
     
  




