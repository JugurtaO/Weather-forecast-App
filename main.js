let submitButton = document.querySelector(".button");
submitButton.addEventListener("click", searchForWeather);

let container = document.querySelector(".container");

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
      alert("Please check that the city/country you have entered does exists");
    });
}

function callBackGetSuccess(data) {
  console.log(data);
  let iconClasses = {
    "humidity":"fa-solid fa-droplet-degree",
    "pressure":"fa-solid fa-wind-warning",
    "temp":"fa-solid fa-cloud",
    "feels_like":"fa-duotone fa-clouds",
    "temp_max":"fa-solid fa-temperature-sun",
    "tem_min": "fa-solid fa-temperature-low"
  };

  let cityName = document.querySelector(".text-fill");
  let cityname = cityName.value;
  for (let key in data.main) {
    if (key === "temp") {
      let divInfos = document.createElement("div");
      divInfos.setAttribute("class", "infos");

      let divCity = document.createElement("div");
      let h3c = document.createElement("h3");
      divCity.setAttribute("class", "city");

      let divData = document.createElement("div");
      let h3d = document.createElement("h3");
      divData.setAttribute("class", "data");

      let divIcon = document.createElement("div");
      let attribute = document.createElement("i");
      attribute.setAttribute("class", iconClasses["temp"]+" fa-2xl");
      divIcon.setAttribute("class", "icon");

      h3c.textContent = cityname;
      h3d.textContent = (data.main.temp - 273).toFixed(1) + "°C";

      divCity.appendChild(h3c);
      divData.appendChild(h3d);
      divIcon.appendChild(attribute);
      divInfos.appendChild(divCity);
      divInfos.appendChild(divIcon);
      divInfos.appendChild(divData);
     

      container.appendChild(divInfos);
    } else {
      let divInfos = document.createElement("div");
      divInfos.setAttribute("class", "infos");

      let divData = document.createElement("div");
      let h3d = document.createElement("h3");
      divData.setAttribute("class", "data");

      let divIcon = document.createElement("div");
      divIcon.setAttribute("class", "icon");
      let attribute = document.createElement("i");

      switch (key) {
        case "pressure":
          h3d.textContent = data.main.pressure + " hPa";
          divIcon.setAttribute("class", iconClasses["pressure"] + " fa-xl");
          break;
        case "humidity":
          h3d.textContent = data.main.humidity + "%";
          divIcon.setAttribute("class", iconClasses["humidity"] + " fa-xl");
          break;
        case "temp_max":
          h3d.textContent = (data.main.temp - 273).toFixed(1) + "°C";
          divIcon.setAttribute("class", iconClasses.temp_max + " fa-xl");
          break;
        case "temp_min":
          h3d.textContent = (data.main.temp - 273).toFixed(1) + "°C";
          divIcon.setAttribute("class", iconClasses["tem_min"] + " fa-xl");
          break;
        case "feels_like":
          h3d.textContent = (data.main.temp - 273).toFixed(1) + "°C";
          divIcon.setAttribute("class", iconClasses["feels_like"] + " fa-xl");
          break;
        default:
          break;
      }
      divData.appendChild(h3d);
      divIcon.appendChild(attribute);
      divInfos.appendChild(divIcon);
      divInfos.appendChild(divData);
      
      
      container.appendChild(divInfos);

      
    }

    // temperature.textContent = "Temperature: " + (data.main.temp - 273).toFixed(1) + "°C"; // expressing temperature with celsius degree
    // humidity.textContent = "Humidity: " + data.main.humidity + "%";
    // pressure.textContent = "Pressure: " + data.main.pressure + " hPa";
    // max_temp.textContent = "Max temp: " + (data.main.temp_max - 273).toFixed(1) + "°C";
    // min_temp.textContent = "Min temps: " + (data.main.temp_min - 273).toFixed(1) + "°C";

    cityName.value = "";
    cityName.focus();
  }
}
