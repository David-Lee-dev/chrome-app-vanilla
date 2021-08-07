const API_KEY = "a36edb034e2afca9af82ce1dafa64b2e";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unit=matrix`
  console.log(url)
  fetch(url).then(response => response.json()).then(data => {
    const state = document.querySelector("#weather #state")
    const temp = document.querySelector("#weather #temp")
    const city = document.querySelector("#weather #location")    

    state.innerText = data.weather[0].main;
    temp.innerText = `${data.main.temp / 10} ℃`
    city.innerText = data.name;
  });
}
function onGeoError(){
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);