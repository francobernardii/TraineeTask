let country = ['London','Buenos Aires','Washington','Madrid'];
let weather = [];
let icon = [];
let humidity = [];
let temperature = [];
let i;

for(i=0; i<4 ; i++){

    $.get('http://api.weatherstack.com/current',{
        access_key: 'dd189a3c7bff0e376eb2075b75381539',
        query: country[i],
        },(data) => {
            console.log(data);
            weather.push(data.current.weather_descriptions[0]);
            icon.push(data.current.weather_icons[0]);
            humidity.push(data.current.humidity);
            temperature.push(data.current.temperature);
             }
       )
}

let paises = document.getElementsByClassName('countryDiv')
let climas = document.getElementsByClassName('weatherDiv')
let iconos = document.getElementsByClassName('iconDiv')
let temperatura = document.getElementsByClassName('temperatureDiv')
let humedad = document.getElementsByClassName('humidityDiv')

setTimeout(() => {
    for(i=0;i<4;i++){
        paises[i].innerHTML = country[i];
        climas[i].children[0].innerText = weather[i];
        iconos[i].children[0].setAttribute('src',icon[i]);
        temperatura[i].children[0].innerText = `Humedad: ${humidity[i]}%`;
        humedad[i].children[0].innerText = `Temperatura: ${temperature[i]}ºC`;
    }
},1000)


    