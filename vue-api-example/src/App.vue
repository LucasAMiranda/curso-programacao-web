
<template>
  <div id="app">
    <img alt="Vue Logo" src="./assets/logo.png"/>
    <WeatherComponent />
  </div>
</template>

<script>
import WeatherComponent from './components/WeatherComponent.vue';

export default {
  name: 'App',
  components:{
    WeatherComponent
  }
}

</script>
