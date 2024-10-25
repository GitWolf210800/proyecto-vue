<template>
    {{ weatherStore.temperatura }}
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