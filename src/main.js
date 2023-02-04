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
    humidity: "fa-brands fa-superpowers fa-shake",
    pressure: "fa-brands fa-soundcloud fa-beat-fade",
    temp: "fa fa-cloud-sun fa-beat-fade",
    temp_max: "fa-solid fa-temperature-arrow-up fa-beat-fade",
    tem_min: "fa-solid fa-temperature-low fa-beat-fade",
  };

  let cityName = document.querySelector(".text-fill");
  let cityname = cityName.value;
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (let key in data.main) {
   
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
          divIcon.setAttribute("class", iconClasses["pressure"] + " fa-2xl");
          break;
        case "humidity":
          h3d.textContent = data.main.humidity + "%";
          divIcon.setAttribute("class", iconClasses["humidity"] + " fa-2xl");
          break;
        case "temp":
          h3d.textContent = (data.main.temp - 273).toFixed(1) + "°C";
          divIcon.setAttribute("class", iconClasses.temp + " fa-2xl");
          break;
        case "temp_max":
          h3d.textContent = (data.main.temp - 273).toFixed(1) + "°C";
          divIcon.setAttribute("class", iconClasses.temp_max + " fa-2xl");
          break;
        case "temp_min":
          h3d.textContent = (data.main.temp - 273).toFixed(1) + "°C";
          divIcon.setAttribute("class", iconClasses["tem_min"] + " fa-2xl");
          break;
        
        default:
          break;
      }
        //before displaying the response ,I'm gonna remove the latest response body from the dom
     
      
    

      //Adding datas to divs
      divData.appendChild(h3d);
      divIcon.appendChild(attribute);
      divInfos.appendChild(divIcon);
      divInfos.appendChild(divData);
      container.appendChild(divInfos);
      
      

      
      
    }

   

    cityName.value = "";
    cityName.focus();
  

  

  
  }

