<template>
    <h3>La temperatura actual es: {{ weatherStore.temperatura }} °C </h3>
</template>

<script setup>
    import { useWheather } from '@/componsables/useWeather';
    import { useWeatherStore } from '@/stores/weatherStore';
    import { onMounted } from 'vue';

    const weatherStore = useWeatherStore();

    onMounted(()=>{
        useWheather();
    });
</script>

<style scoped>
</style>