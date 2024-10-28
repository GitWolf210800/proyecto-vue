<template>

<div class="sidebar">
<h2>Bienvenido</h2>
<h3>Nombre: {{ registrarStore.nombre }}</h3>
<h3>Email: {{ registrarStore.email.value }}</h3>
<router-link to="/contador">Contador</router-link>
<router-link to="/lista-de-tareas">Lista de Tareas</router-link>
<router-link to="/registrar">Registrar</router-link>
<router-link to="/calcular">calcular</router-link>
</div>

</template>

<script setup>
import { useRegistrarStore } from '@/modules/registro/views/stores/registrarStore';

const registrarStore = useRegistrarStore();

</script>

<style>
.sidebar {
    width: 200px;
    background-color: rgba(60, 60, 60, 0.29);;
    color: #FFF;
    padding: 20px;
    margin: auto;
}
</style>