const API_KEY = "de5163ebbe55a3a2aec4f77a40a96c07";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unit=matrix`
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:first-child")    
    const name = data.name;
    weather.innerText = data.weather[0].main;
    city.innerText = data.name;
  });
}
function onGeoError(){
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);