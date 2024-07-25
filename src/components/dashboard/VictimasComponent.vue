<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Definir una referencia reactiva para los datos de las víctimas
const victimas = ref([]);

// Función para obtener los datos del servidor
const fetchVictimas = async () => {
    try {
        const response = await axios.get('https://violeta-back.onrender.com/api/victimas');
        victimas.value = response.data; // Asignar los datos obtenidos a la referencia
    } catch (error) {
        console.error('Error al obtener las víctimas:', error);
    }
};

// Obtener los datos cuando el componente se monta
onMounted(() => {
    fetchVictimas();
});
</script>

<template>
    <h2>Victimas</h2>
    <div class="table-responsive small">
        <table class="table table-striped table-sm">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Número de Identificación</th>
                    <th scope="col">Correo Electrónico</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="victima in victimas" :key="victima.id">
                    <td>{{ victima.id }}</td>
                    <td>{{ victima.name }}</td>
                    <td>{{ victima.lastname }}</td>
                    <td>{{ victima.id_number }}</td>
                    <td>{{ victima.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<style scoped></style>