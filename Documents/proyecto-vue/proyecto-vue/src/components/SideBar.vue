<template>

<div class="sidebar">
<h2>Barra Lateral</h2>
<router-link to="/contador">Contador</router-link>
<router-link to="/lista-de-tareas">Lista de Tareas</router-link>
<router-link to="/registrar">Registrar</router-link>
</div>

</template>

<script setup>

</script>

<style>
.sidebar {
    width: 200px;
    background-color: rgba(60, 60, 60, 0.29);;
    color: #FFF;
    padding: 20px;
}
</style>