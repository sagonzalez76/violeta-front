<script setup>
import router from '@/router';
import axios from 'axios';
import { ref, onMounted } from 'vue';

// Definir referencias reactivas para los datos del formulario
const incidentDate = ref('');
const location = ref('');
const type = ref('');
const description = ref('');
const aggressor = ref('');
const relationship = ref('');
const previousReports = ref(false);
const medicalHelp = ref(false);
const legalHelp = ref(false);
const consent = ref(false);
const contactPreference = ref('');
const victimaId = ref(null);
const victimarioId = ref(null);

// Definir una referencia reactiva para las víctimas
const victimas = ref([]);

// Obtener la lista de víctimas desde la API
const fetchVictimas = async () => {
    try {
        const response = await axios.get('https://violeta-back.onrender.com/api/victimas');
        victimas.value = response.data; // Asignar los datos de víctimas a la referencia
    } catch (error) {
        console.error('Error al obtener las víctimas:', error);
    }
};

// Definir una referencia reactiva para los victimarios
const victimarios = ref([]);

// Obtener la lista de victimarios desde la API
const fetchVictimarios = async () => {
    try {
        const response = await axios.get('https://violeta-back.onrender.com/api/victimarios');
        victimarios.value = response.data; // Asignar los datos de victimarios a la referencia
    } catch (error) {
        console.error('Error al obtener los victimarios:', error);
    }
};

// Llamar a fetchVictimas cuando el componente se monte
onMounted(() => {
    fetchVictimas();
    fetchVictimarios();

});

const handleSubmit = async () => {
    try {
        const response = await axios.post('https://violeta-back.onrender.com/api/incidencias', {
            incidentDate: incidentDate.value,
            location: location.value,
            type: type.value,
            description: description.value,
            relationship: relationship.value,
            previousReports: previousReports.value,
            medicalHelp: medicalHelp.value,
            legalHelp: legalHelp.value,
            consent: consent.value,
            contactPreference: contactPreference.value,
            victimaId: victimaId.value,
            victimarioId: victimarioId.value
        });

        // Redirigir a la página de incidentes o donde sea necesario
        router.push('/');

    } catch (error) {
        console.log(error);
        alert('Error al enviar los datos. Por favor, intenta de nuevo.');
    }
};
</script>

<template>

    <body class="d-flex align-items-center py-4 bg-body-tertiary">
        <main class="form-signin w-100 m-auto">
            <form class="text-center gap-5" @submit.prevent="handleSubmit">
                <img class="mb-4" src="../assets/logo_violeta.png" alt="" width="72" height="57">
                <h1 class="h3 mb-3 fw-normal">Datos del Incidente</h1>
                <div class="form-floating">
                    <input v-model="incidentDate" type="datetime-local" class="form-control" id="incidentDateInput"
                        placeholder="Fecha del Incidente">
                    <label for="incidentDateInput">Fecha del Incidente</label>
                </div>
                <div class="form-floating">
                    <input v-model="location" type="text" class="form-control" id="locationInput"
                        placeholder="Ubicación">
                    <label for="locationInput">Ubicación</label>
                </div>
                <div class="form-floating">
                    <select v-model="type" class="form-control" id="typeInput">
                        <option value="" disabled>Seleccione el Tipo</option>
                        <option value="fisica">Física</option>
                        <option value="psicologica">Psicológica</option>
                        <option value="sexual">Sexual</option>
                        <option value="economica">Económica</option>
                    </select>
                    <label for="typeInput">Tipo de Incidente</label>
                </div>
                <div class="form-floating">
                    <textarea v-model="description" class="form-control" id="descriptionInput"
                        placeholder="Descripción"></textarea>
                    <label for="descriptionInput">Descripción</label>
                </div>
                <div class="form-floating">
                    <select v-model="relationship" class="form-control" id="relationshipInput">
                        <option value="" disabled>Seleccione la Relación</option>
                        <option value="pareja">Pareja</option>
                        <option value="expareja">Expareja</option>
                        <option value="familiar">Familiar</option>
                        <option value="conocido">Conocido</option>
                        <option value="desconocido">Desconocido</option>
                    </select>
                    <label for="relationshipInput">Relación</label>
                </div>
                <div class="form-check">
                    <input v-model="previousReports" type="checkbox" class="form-check-input" id="previousReportsInput">
                    <label class="form-check-label" for="previousReportsInput">Informes Anteriores</label>
                </div>
                <div class="form-check">
                    <input v-model="medicalHelp" type="checkbox" class="form-check-input" id="medicalHelpInput">
                    <label class="form-check-label" for="medicalHelpInput">Ayuda Médica</label>
                </div>
                <div class="form-check">
                    <input v-model="legalHelp" type="checkbox" class="form-check-input" id="legalHelpInput">
                    <label class="form-check-label" for="legalHelpInput">Ayuda Legal</label>
                </div>
                <div class="form-check">
                    <input v-model="consent" type="checkbox" class="form-check-input" id="consentInput">
                    <label class="form-check-label" for="consentInput">Consentimiento</label>
                </div>
                <div class="form-floating">
                    <select v-model="contactPreference" class="form-control" id="contactPreferenceInput">
                        <option value="" disabled>Preferencia de Contacto</option>
                        <option value="telefono">Teléfono</option>
                        <option value="correo">Correo Electrónico</option>
                    </select>
                    <label for="contactPreferenceInput">Preferencia de Contacto</label>
                </div>
                <div class="form-floating">
                    <select v-model="victimaId" class="form-control" id="victimaSelect">
                        <option value="" disabled>Seleccione una Víctima</option>
                        <option v-for="victima in victimas" :key="victima.id" :value="victima.id">
                            {{ victima.name }} {{ victima.lastname }}
                        </option>
                    </select>
                    <label for="victimaSelect">Víctima</label>
                </div>
                <div class="form-floating">
                    <select v-model="victimarioId" class="form-control" id="victimaSelect">
                        <option value="" disabled>Seleccione e/la Victimario(a)</option>
                        <option v-for="victimario in victimarios" :key="victimario.id" :value="victimario.id">
                            {{ victimario.name }} {{ victimario.lastname }}
                        </option>
                    </select>
                    <label for="victimaSelect">Víctimario</label>
                </div>
                <button class="btn btn-primary w-100 py-2" type="submit">Guardar Incidente</button>
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

.form-floating {

    margin-block: 1rem;
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
