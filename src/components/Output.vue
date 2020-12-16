// Temperature (C or F as selected by user)
// City name
// Current conditions – ie Clouds, Sunny etc
// Icon/Image representing the current conditions – written description optional (ie partly cloudy)
// The data and subsequent page update should be based on updating the DOM (not via a page reload or form submission)

<template>
<!-- used a card component from bootstrap to start with -->
    <div class="card" style="width: 18rem;">
    <img :src="imgsrc" class="card-img-top" alt="Image Unavailable">
      <!-- keep content below here -->
  <div class="card-body">
    <h5 class="card-title">Live Weather for {{obj.name}}</h5>
    <p class="card-text"> 
      <!-- vue-bootstrap list elements they look nice -->
      <b-list-group>
        <!-- various weather conditions in this list group -->
        <b-list-group-item>Weather Conditions: {{obj.weather[0].main}}</b-list-group-item>
        <b-list-group-item>Current Temperature is: {{obj.main.temp}}</b-list-group-item>
        <b-list-group-item>The high for the day is: {{obj.main.temp_max}}</b-list-group-item>
        <b-list-group-item>The low for the day is: {{obj.main.temp_min}}</b-list-group-item>
        <b-list-group-item>Feels Like: {{obj.main.feels_like}}</b-list-group-item>
      </b-list-group>
    </p>
  </div>
 
  <div class="card-body">
    
  </div>
  <!-- keep content above here -->
</div>
</template>
<script>

export default{
  name: 'Output',
  props: {
    //recieves this from axios calls in App.vue
    // obj is the bulk of the JSON Data so I can drill down where I need to and use fewer v-binds
    obj: Object,
    //made an exception for the image source because it requires an additional link
    imgsrc: Object
  },
}
</script>
<style scoped>
.card {
  margin-left: 41.5%;
}
</style>