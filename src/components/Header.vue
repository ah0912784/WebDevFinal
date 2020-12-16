<template>
    <header class="p-3 mb-2 bg-dark text-white">
        <h1>{{text}}</h1>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        text: String
    }
}
</script>
<style scoped>
h1{

    margin-top: 12.5px ;
    text-align: center;
    font-size: 50px;
}
header{
    text-align: center;
    height: 100px;
    width: 100%;
    margin: 5px;
}
</style>