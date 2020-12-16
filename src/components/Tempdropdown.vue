<template>
   <div>
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
