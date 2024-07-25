<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Definir una referencia reactiva para los datos de las incidencias
const incidencias = ref([]);

// Función para obtener los datos del servidor
const fetchIncidencias = async () => {
    try {
        const response = await axios.get('http://localhost:4000/api/incidencias');
        incidencias.value = response.data; // Asignar los datos obtenidos a la referencia
    } catch (error) {
        console.error('Error al obtener las incidencias:', error);
    }
};

// Obtener los datos cuando el componente se monta
onMounted(() => {
    fetchIncidencias();
});
</script>

<template>
    <h2>Incidencias</h2>
    <div class="table-responsive small">
        <table class="table table-striped table-sm">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Ubicación</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Relación</th>
                    <th scope="col">Informes Anteriores</th>
                    <th scope="col">Ayuda Médica</th>
                    <th scope="col">Ayuda Legal</th>
                    <th scope="col">Consentimiento</th>
                    <th scope="col">Preferencia de Contacto</th>
                    <th scope="col">ID de Víctima</th>
                    <th scope="col">ID de Victimario</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="incidencia in incidencias" :key="incidencia.id">
                    <td>{{ incidencia.id }}</td>
                    <td>{{ new Date(incidencia.incidentDate).toLocaleString() }}</td>
                    <td>{{ incidencia.location }}</td>
                    <td>{{ incidencia.type }}</td>
                    <td>{{ incidencia.description }}</td>
                    <td>{{ incidencia.relationship }}</td>
                    <td>{{ incidencia.previousReports ? 'Sí' : 'No' }}</td>
                    <td>{{ incidencia.medicalHelp ? 'Sí' : 'No' }}</td>
                    <td>{{ incidencia.legalHelp ? 'Sí' : 'No' }}</td>
                    <td>{{ incidencia.consent ? 'Sí' : 'No' }}</td>
                    <td>{{ incidencia.contactPreference }}</td>
                    <td>{{ incidencia.victimaId }}</td>
                    <td>{{ incidencia.victimarioId }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>