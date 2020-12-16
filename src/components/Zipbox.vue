<template>
    <div class="input-group mb-3">
        <div name="error" :style='errorstyle' id="error">{{errormsg}}</div>
        <!-- click event triggers the verify function on the submit button-->
        <button class="btn btn-primary" type="button" id="button-addon1" v-on:click="verify()">Submit</button>
        <!-- way at the end you'll see the v-model. it is used to get the innerHtml of a vue element-->
        <input id="input" type="text" class="form-control" :placeholder="placeholdertxt" aria-label="Example text with button addon" aria-describedby="button-addon1" v-model="zip" :style="theinput">
    </div>
</template>
<script>

export default {
    name: 'Zipbox',
    data(){
        return{
        zip: "",
        //add description to input box 
        placeholdertxt: 'Enter 5 digit zip',
        //style rules to be altered depending on valid or invalid zipcode
        theinput: 'backgroundColor: white',
        errorstyle: 'display: none',
        //error message
        errormsg: "Invalid Zip Code. Please make sure it contains 5 characters and is a real zip code",
        
        }
    },
    methods: {
        //this mostly assigns color changes and it calls the validateZipCode function
       verify(){
           if(this.validateZipCode(this.zip) == true){
                this.$emit('zip', this.zip)
                this.errorstyle = 'display: none'
                this.theinput = 'backgroundColor: #00fa9a'
           } else{
                this.theinput = 'backgroundColor: #FFCCCC'
                this.errorstyle = 'display: inline-flex'
              
              
       }
    },
    // this was a handy function for validating the zipcode. returns true if the zip matches the regex
    validateZipCode(elementValue){
    var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
    return zipCodePattern.test(elementValue);
}
}
}
</script>

<style scoped>
input{
    widows: 18rem;
}
div{
    width: 18rem;
    margin-left: 41.5%;
}
</style>