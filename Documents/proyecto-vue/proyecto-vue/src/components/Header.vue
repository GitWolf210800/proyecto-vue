<template>
    <div class="header">
        <h1>La temperatura actual es: <Weather /> </h1>
    </div>
</template>

<script setup>
import Weather from './Weather.vue';
</script>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: #333;
    color: #FFF;
}

h1 {
    margin: 0;
}
</style>