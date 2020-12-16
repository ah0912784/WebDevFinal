<template>
  <div id="app">
    <Header v-bind:text="headertext"></Header>
  <Output v-bind:obj="apidata" v-bind:imgsrc='imgsrc'></Output>
   <Zipbox v-on:zip="usrZip($event)" ></Zipbox>
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
      //I started these as a default setting
    units: 'imperial',
    zipcode: '20003',
    headertext: "Alex's Weather Service!",
    imgsrc:'',
    apidata: '',
    }
  },
methods: {
  tempType(usrinput) 
  {
   this.units = usrinput;
   this.theCall()
  },
  usrZip(usrinput){
    console.log("usr input"+usrinput)
    this.zipcode = usrinput;
    this.theCall();
    },
    theCall(){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${this.zipcode},us&units=${this.units}&appid=e2a8a4185bae0c476ee845e555c0237b`).then((response)=>{
                  this.apidata = response.data
                  console.log(this.apidata)
                  //this.$emit(this.apiData);
              })
    },
  },//end of methods
  mounted(){
     axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${this.zipcode},us&units=${this.units}&appid=e2a8a4185bae0c476ee845e555c0237b`).then((response)=>{
                  this.apidata = response.data
                  this.imgsrc = 'http://openweathermap.org/img/wn/'+this.apidata.weather[0].icon+'@2x.png'
                  //console.log(this.apidata)
                  //this.$emit(this.apiData);
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
