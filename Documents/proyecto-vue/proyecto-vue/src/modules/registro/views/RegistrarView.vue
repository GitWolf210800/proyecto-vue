<template>
    <div>
        <h2>Formulario de Registro</h2>
        <Form>
            <div class="form">
                <label for="nombre">Nombre:</label>
                <input type="text" placeholder="ingrese su nombre">
            </div>
            <div class="form">
                <label for="correo">Correo:</label>
                <input type="email" placeholder="ingrese su email">
            </div>
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>  
    </div>
</template>

<script setup>
import { Form, Field } from 'vee-validate';
</script>

<style scoped>
.form {
    margin-bottom: 10px;
}
</style>