<script setup>
import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';

const nombre = ref('');
const apellido = ref('');
const idNumero = ref('');
const email = ref('');

const handleSubmit = async () => {
    console.log(nombre.value, apellido.value, idNumero.value, email.value);
    try {
        const response = await axios.post('https://violeta-back.onrender.com/api/victimarios', {
            name: nombre.value,
            lastname: apellido.value,
            id_number: idNumero.value,
            email: email.value
        });
        router.push('/incidente');

    } catch (error) {
        alert('Error al enviar los datos. Por favor, intenta de nuevo.');
    }
};
</script>

<template>

    <body class="d-flex align-items-center py-4 bg-body-tertiary">
        <main class="form-signin w-100 m-auto">
            <form class="text-center" @submit.prevent="handleSubmit">
                <img class="mb-4" src="../assets/logo_violeta.png" alt="" width="72" height="57">
                <h1 class="h3 mb-3 fw-normal">Datos victimario(a)</h1>
                <div class="form-floating">
                    <input v-model="nombre" type="text" class="form-control" id="nombreInput" placeholder="Nombre">
                    <label for="nombreInput">Nombre</label>
                </div>
                <div class="form-floating">
                    <input v-model="apellido" type="text" class="form-control" id="apellidoInput"
                        placeholder="Apellido">
                    <label for="apellidoInput">Apellido</label>
                </div>
                <div class="form-floating">
                    <input v-model="idNumero" type="number" class="form-control" id="idInput"
                        placeholder="Número de Identificación">
                    <label for="idInput">Número de Identificación</label>
                </div>
                <div class="form-floating">
                    <input v-model="email" type="email" class="form-control" id="emailInput"
                        placeholder="Correo Electrónico">
                    <label for="emailInput">Correo Electrónico</label>
                </div>
                <button class="btn btn-primary w-100 py-2" type="submit">Continuar <i
                        class="bi bi-arrow-right"></i></button>
            </form>
        </main>
    </body>
</template>


<style scoped>
body {
    height: 100%;
}

.form-signin {
    max-width: 330px;
    padding: 1rem;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

.b-example-divider {
    width: 100%;
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
}

.bi {
    vertical-align: -.125em;
    fill: currentColor;
}

.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
    --bd-violet-bg: #712cf9;
    --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

    --bs-btn-font-weight: 600;
    --bs-btn-color: var(--bs-white);
    --bs-btn-bg: var(--bd-violet-bg);
    --bs-btn-border-color: var(--bd-violet-bg);
    --bs-btn-hover-color: var(--bs-white);
    --bs-btn-hover-bg: #6528e0;
    --bs-btn-hover-border-color: #6528e0;
    --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
    --bs-btn-active-color: var(--bs-btn-hover-color);
    --bs-btn-active-bg: #5a23c8;
    --bs-btn-active-border-color: #5a23c8;
}

.bd-mode-toggle {
    z-index: 1500;
}

.bd-mode-toggle .dropdown-menu .active .bi {
    display: block !important;
}
</style>
