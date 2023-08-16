function findCity(name) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.weatherapi.com/v1/current.json?key=6dab922c6c0943faaf0161233231508&q=${name}`,{mode: 'cors'})
        .then((response) => response.json())
        .then((data) => {
          resolve(data); 
        })
        .catch((error) => {
          console.log(error);
          reject(error); 
        });
    });
  }
  
 

const bar = document.getElementById("name");
const tlacidlo = document.getElementById("submitbutton");
const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const emoji = document.getElementById("emoji");
tlacidlo.addEventListener("click",()=>{
    let value = bar.value;
    findCity(value)
    .then((weatherData) => {
        if(weatherData.current.temp_c>=26){
            emoji.innerText="☀️";
        }
        else if(weatherData.current.temp_c>=17 &&weatherData.current.temp_c<26){
            emoji.innerText="⛅";
        }else{
            emoji.innerText="☁️";
        }
        city.innerText=weatherData.location.name;
        temperature.innerText=`${weatherData.current.temp_c}°C`;
        humidity.innerText=`${weatherData.current.humidity}%`;
    })
    .catch((error) => {
      alert("City you are looking for either isn't in the database or you misspeled it");
    });
});


