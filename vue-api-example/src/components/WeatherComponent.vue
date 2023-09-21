<template>
    <div>
        <h2>Previsão do Tempo</h2>
        <form @submit.prevent="fetchWeather">
           <label for="city">Digite o nome da cidade:  </label>
           <input type="text" id="city" v-model="city" />
           <button type="submit">Buscar</button>
        </form>

        <div v-if="weather">
            <h3>Previsão para {{ weather.name }}</h3>
            <p>Temperatura: {{ weather.main.temp }} °C</p>
            <p>Tempo: {{ translateWeatherDescription(weather.weather[0].description) }}</p>         
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                city: '',
                weather: null
            };
        },

        methods:{
            async fetchWeather(){
                try{
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=6094fa19e8280ae04bdc5adc60fc1701`);
                    const weatherData = await response.json();
                    this.weather = weatherData;
                }catch(error){
                    console.log("Erro ao buscar dados da API: ", error);
                }
            },

            translateWeatherDescription(description){
                const translationMap = {
                    "clear sky": "Ceú Limpo",
                    "few clouds": "poucas nuvens",
                    "scatter clouds": "nuvens dispersas",
                    "broken clouds": "nuvens quebradas",
                    "shower rain": "chuva de banho",
                    "rain": "chuva",
                    "thunderstorm": "tempestade",
                    "snow": "neve",
                    "mist": "neblina",

                };

            
            return translationMap[description.toLowerCase()] || description;
            
        }
    }

}
</script>