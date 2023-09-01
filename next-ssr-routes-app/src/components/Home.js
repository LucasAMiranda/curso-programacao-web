import React, { useState, useEffect } from 'react';
import CityList from './CityList';

const Home = () => {
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '6094fa19e8280ae04bdc5adc60fc1701'; // Substitua pela sua chave de API

  // Função para adicionar uma cidade à lista quando o usuário pressionar no botão ou Enter.
  const handleCitySubmit = (event) => {
    event.preventDefault();
    if (cityName.trim() === '') {
      return;
    }

    // Crie um novo objeto de cidade e adicione-o à lista de cidades.
    const newCity = { id: cityName.toLowerCase(), name: cityName };
    setCities((prevData) => [...prevData, newCity]);
    setCityName('');
  };

  // Função para lidar com o clique em uma cidade da lista.
  const handleCityClick = (city) => {
    console.log(`Cidade Clicada: ${city.name}`);
  };

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Erro ao buscar dados meteorológicos:', error);
      }
    }

    // Adicione as dependências cityName e apiKey aqui
    if (cityName) {
      fetchWeatherData();
    }
  }, [cityName, apiKey]); // Adicione cityName e apiKey como dependências

  return (
    <div>
      <h1>Previsão do Tempo</h1>

      <form onSubmit={handleCitySubmit}>
        <input
          type='text'
          placeholder='Digite o nome da cidade'
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button type='submit' onClick={(e) => setCityName(e.target.value)}>Pesquisar</button>
      </form>
      {weatherData && weatherData.main ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Clima: {weatherData.weather[0].description}</p>
          <p>Umidade: {weatherData.main.humidity}%</p>
        </div>
      ) : (
        <p>Carregando Dados...</p>
      )}
      <CityList cities={cities} onCityClick={handleCityClick} />
    </div>
  );
};

export default Home;
