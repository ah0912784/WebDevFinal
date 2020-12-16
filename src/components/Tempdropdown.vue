<template>
   <div>
       <!-- these are bootstrap-vue dropdown menues. It turns out normal bootstrap does not work -->
  <b-dropdown id="dropdown-1" text="Preferred Temperature Units" class="m-md-2">
    <b-dropdown-item v-on:click='imperial()'>Farenheit</b-dropdown-item>
    <b-dropdown-item v-on:click='celcius()'>Celcius</b-dropdown-item>
  </b-dropdown>
</div>
</template>
<script>
export default {
    name: 'Tempdropdown',
    data() {
    return {
        unit: '',
    }
},
    methods: {
        //these methods are for emitting the temperature unit type
        imperial(){
            this.unit = 'imperial'
            this.$emit('unit','imperial')
        },
        celcius(){
            this.unit = 'metric'
            this.$emit('unit','metric')
        }
    }
}
</script>
<style scoped>
div {
    float: left;
    margin-left: 42.5%;
}
</style>
