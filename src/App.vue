<template>
  <div id="app">
    <Header v-bind:text="headertext"></Header>
    <!-- the output element recieves the image source and the obj data from axios call -->
  <Output v-bind:obj="apidata" v-bind:imgsrc='imgsrc'></Output>
  <!-- this is the element that receives user zipcode and validates it within the component -->
   <Zipbox v-on:zip="usrZip($event)" ></Zipbox>
   <!-- the simple dropdown menu to select temperature -->
   <Tempdropdown v-on:unit="tempType($event)"></Tempdropdown>

  </div>
</template>

<script>
import axios from 'axios'
import Output from './components/Output.vue'
import Tempdropdown from './components/Tempdropdown.vue'
import Zipbox from './components/Zipbox.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Zipbox,
    Output,
    Tempdropdown,
    Header,
  },
  data() {
    //API vars
    return {
      //I started these as a default settings for the axios call. I don't like the way empty boxes look
    units: 'imperial',
    zipcode: '20003',
    headertext: "Alex's Weather Service!",
    //these two vars will take JSON data from axios call
    imgsrc:'',
    apidata: '',
    }
  },
methods: {
  //catches and assigns the new temperature unit and makes a new axios call so that it is always updated
  tempType(usrinput) 
  {
   this.units = usrinput;
   this.theCall()
  },
//similar to the above function but with zipcodes
  usrZip(usrinput){
    this.zipcode = usrinput;
    this.theCall();
    },
    //this function is for calling axios whenever a change is made
    theCall(){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${this.zipcode},us&units=${this.units}&appid=e2a8a4185bae0c476ee845e555c0237b`).then((response)=>{
                  this.apidata = response.data
                  console.log(this.apidata)
              })
    },
  },//end of methods
  //this mounted fills the output element until new data is entered by the user
  mounted(){
     axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${this.zipcode},us&units=${this.units}&appid=e2a8a4185bae0c476ee845e555c0237b`).then((response)=>{
                  this.apidata = response.data
                  this.imgsrc = 'http://openweathermap.org/img/wn/'+this.apidata.weather[0].icon+'@2x.png'
              })
  }
 
}


</script>

//'api.openweathermap.org/data/2.5/weather?zip='+this.zipcode+'&units='+this.units+'&appid=e2a8a4185bae0c476ee845e555c0237b'
//`api.openweathermap.org/data/2.5/weather?zip=${this.zipcode}&units=${this.units}&appid=e2a8a4185bae0c476ee845e555c0237b`
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
