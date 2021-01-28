<template>
  <div>
        <div>
            <Nabvar/>
        </div>
    <b-container class="mt-4">
        <b-row>
            <h4>Create a new case</h4>
            <hr>
        </b-row>
        <b-row class="mt-3">
            <b-col cols="2">
                <b-dropdown variant="outline-dark">
                    <template #button-content>
                        Gender
                        <font-awesome-icon icon="restroom" style="font-size: 100%" />
                    </template>
                    <b-dropdown-item @click="genreOption = 'F'">Femenino</b-dropdown-item>
                    <b-dropdown-item @click="genreOption = 'M'">Masculino</b-dropdown-item>
                </b-dropdown>
            </b-col>
            <b-col cols="2">
                <b-dropdown variant="outline-dark">
                    <template #button-content>
                        State
                        <font-awesome-icon icon="info-circle" style="font-size: 100%" />
                    </template>
                    <b-dropdown-item v-for="(item, index) in getStatusOptions" :key="index" @click="statusOption = item">
                        {{ item }}
                    </b-dropdown-item>
                </b-dropdown>
            </b-col>
            <b-col cols="2">
                <b-dropdown variant="outline-dark" dropright>
                    <template #button-content>
                        City
                        <font-awesome-icon icon="city" style="font-size: 100%" />
                    </template>
                    <b-dropdown-item v-for="(item, index) in getCitiesOptions" :key="index" @click="cityOption = item">
                        {{ item }}
                    </b-dropdown-item>
                </b-dropdown>
            </b-col>
            <b-col cols="2">
                <b-dropdown variant="outline-dark">
                    <template #button-content>
                        Ubication
                        <font-awesome-icon icon="heartbeat" style="font-size: 100%" />
                    </template>
                    <b-dropdown-item v-for="(item, index) in getUbicationOption" :key="index" @click="ubicationOption = item">
                        {{ item }}
                    </b-dropdown-item>
                </b-dropdown>
            </b-col>
            <b-col cols="2">
                <b-dropdown variant="outline-dark">
                    <template #button-content>
                        Recuperation Type
                        <font-awesome-icon icon="procedures" style="font-size: 100%" />
                    </template>
                    <b-dropdown-item v-for="(item, index) in getRecuperationOption" :key="index" @click="recuperationOption = item">
                        {{ item }}
                    </b-dropdown-item>
                </b-dropdown>
            </b-col>
            <b-col cols="2">
                <b-input-group>
                    <b-form-input placeholder="Digite la edad" type="number" v-model="edad"></b-form-input>
                </b-input-group>
            </b-col>
        </b-row>
        <b-button variant="primary" class="mt-4" @click="Add()">Add Case</b-button>
    </b-container>
</div>
</template>

<script>

import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';
import Nabvar from '../components/Nabvar.vue'

export default {
    components: {
        Nabvar,
    },
    data() {
        return {
            genreOption: null,
            statusOption: null,
            cityOption: null,
            ubicationOption: null, 
            recuperationOption: null, 
            edad: null
        }
    },
    methods: {
        ...mapActions(['callAddUser', 'callIncrementId']),

        Add() {
            alert('Agregado correctamente');
            let user = {
                'id_de_caso': this.getIdUsers,
                'estado': this.statusOption,
                'ubicacion': this.ubicationOption,
                'tipo_recuperacion': this.recuperationOption,
                'edad': this.edad,
                'ciudad_municipio_nom': this.cityOption,
                'sexo': this.genreOption
            }
            this.callAddUser(user);
            this.callIncrementId();
            this.genreOption = null;
            this.statusOption = null;
            this.cityOption = null;
            this.ubicationOption = null;
            this.recuperationOption = null;
            this.edad = null;
        }
    },
    computed: {
        ...mapGetters(['getIdUsers', 'getStatusOptions', 'getCitiesOptions', 'getUbicationOption', 'getRecuperationOption'])
    },
}
</script>

<style>

</style>