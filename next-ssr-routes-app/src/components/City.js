import React from "react";


const City = ({ weather}) => {
    return (
        <div>
            <h1> Previsão do Tempo - {weather.name} </h1>
            <p> Temperatura : {weather.main.temp} °C</p>
            <p> Tempo: {weather.weather[0].description}</p>
        </div>
    );
};

City.getInitialProps = async ({query}) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${query.id} & 
                           unit=metric&appid=6094fa19e8280ae04bdc5adc60fc1701
                           `);
    const weather = await res.json();
    return {weather};;
    
};

export default City;