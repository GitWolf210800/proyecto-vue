<template>

<div class="sidebar">
<h2>Bienvenido</h2>
<h3>Nombre: {{ nombre }}</h3>
<h3>Email: {{ email }}</h3>
<router-link to="/contador">Contador</router-link>
<router-link to="/lista-de-tareas">Lista de Tareas</router-link>
<router-link to="/registrar">Registrar</router-link>
</div>

</template>

<script setup>
import { useRegistrarStore } from '@/modules/registro/views/stores/registrarStore';
import { ref, watch } from 'vue';

const registrarStore = useRegistrarStore();
const nombre = ref(registrarStore.nombre.value);
const email = ref(registrarStore.email.value);
watch(() => registrarStore.nombre, (newValue) => {
    nombre.value = newValue;
});

watch(() => registrarStore.email, (newValue) => {
    email.value = newValue;
});
</script>

<style>
.sidebar {
    width: 200px;
    background-color: rgba(60, 60, 60, 0.29);;
    color: #FFF;
    padding: 20px;
}
</style>