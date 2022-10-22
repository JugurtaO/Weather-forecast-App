let submitButton = document.querySelector(".button");
submitButton.addEventListener("click", searchForWeather);



const CityOrCountry = document.getElementById("CC");
const temperature = document.getElementById("T");
const pressure = document.getElementById("P");
const humidity = document.getElementById("H");
const max_temp = document.getElementById("MAX");
const min_temp = document.getElementById("MIN");


function searchForWeather() {
  let cityName = document.querySelector(".text-fill").value;
  let params = {
    url:
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&APPID=fcc9ecae4fbde8e13d48a737830dc237",
    method: "GET",
  };

  $.ajax(params)
    .done(callBackGetSuccess)

    .fail(function () {
      alert("error!! The city or country you have entered does not");
    });
}

function callBackGetSuccess(data) {
  let cityName = document.querySelector(".text-fill");
  let cityname = cityName.value;
  
  document.getElementsByClassName("weather-info")[0].style.backgroundColor ="rgb(2, 19, 19)";
  document.getElementsByClassName("weather-info")[0].style. opacity ="0.4";
    
    
  CityOrCountry.textContent = cityname;
  temperature.textContent = "Temperature: " +(data.main.temp- 273 ).toFixed(1)+"°C" ; // expressing temperature with celsius degree
  humidity.textContent = "Humidity: " + data.main.humidity + "%";
  pressure.textContent = "Pressure: " + data.main.pressure +" hPa";
  max_temp.textContent = "Max temp: " + (data.main.temp_max - 273).toFixed(1) + "°C";
  min_temp.textContent = "Min temps: " + (data.main.temp_min - 273).toFixed(1) + "°C";


  cityName.value ="";
  cityName.focus();

 
}


