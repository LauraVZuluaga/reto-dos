<template>
<div>
    <div>
        <Nabvar/>
    </div>
    <b-container class="mt-5">
        <b-row class="mb-4">
            <b-col cols="3">
                <b-dropdown variant="outline-dark">
                    <template #button-content>
                        Gender
                        <font-awesome-icon icon="restroom" style="font-size: 100%" />
                    </template>
                    <b-dropdown-item @click="genreOption = 'F'">Femenino</b-dropdown-item>
                    <b-dropdown-item @click="genreOption = 'M'">Masculino</b-dropdown-item>
                </b-dropdown>
            </b-col>
            <b-col cols="3">
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
            <b-col cols="3">
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
            <b-col cols="3">
                <b-button variant="outline-primary" @click="GraphTable">Buscar</b-button>
            </b-col>
        </b-row>
        <hr />
        <b-row>
            <div class="text-center"></div>
            <b-spinner variant="primary" v-if="spinner"></b-spinner>
            <b-table hover :items="graphData" v-if="table" :fields="fields" sticky-header="40em" style="width:100%;" head-variant="dark" bordered small table-variant="success">
                <template v-slot:cell(Borrar)="{ item }">
                    <b-button variant="danger" v-on:click="DeleteUser(item.id)">
                        <font-awesome-icon icon="user-times" style="font-size: 100%" />
                    </b-button>
                </template>
            </b-table>
        </b-row>
    </b-container>
</div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'
import Nabvar from '../components/Nabvar.vue'

export default {
    components: {
        Nabvar
    },
    data() {
        return {
           genreOption: null, 
           statusOption: null, 
           cityOption: null,
           fields: ['id', 'estado', 'ciudad', 'ubicacion', 'edad', 'tipoRecuperacion', 'genero', 'Borrar'], 
           table: false,
           graphData: [],
           spinner: false,
        }
    },
    methods: {
        ...mapActions(['callDeleteUser']),

        GraphTable() {
            this.spinner = true;
            this.Data();
            this.table = true;
        },
        Data() {
            setTimeout(() => {
                this.graphData = [];
                if (this.genreOption === null && this.statusOption === null && this.cityOption === null) {
                    this.getData.map((list) => {
                        let info = new Object();
                        info.id = list.id_de_caso;
                        info.estado = list.estado;
                        info.ciudad = list.ciudad_municipio_nom;
                        info.ubicacion = list.ubicacion;
                        info.edad = list.edad;
                        info.tipoRecuperacion = list.tipo_recuperacion;
                        info.genero = list.sexo;
                        this.graphData.push(info);
                    });
                } else if (this.genreOption !== null && this.statusOption === null && this.cityOption === null) {
                    this.getData.map((list) => {
                        if (list.sexo === this.genreOption) {
                            let info = new Object();
                            info.id = list.id_de_caso;
                            info.estado = list.estado;
                            info.ciudad = list.ciudad_municipio_nom;
                            info.ubicacion = list.ubicacion;
                            info.edad = list.edad;
                            info.tipoRecuperacion = list.tipo_recuperacion;
                            info.genero = list.sexo;
                            this.graphData.push(info);
                        }
                    });
                } else if (this.genreOption !== null && this.statusOption !== null && this.cityOption === null) {
                    this.getData.map((list) => {
                        if (list.sexo === this.genreOption && list.estado === this.statusOption) {
                            let info = new Object();
                            info.id = list.id_de_caso;
                            info.estado = list.estado;
                            info.ciudad = list.ciudad_municipio_nom;
                            info.ubicacion = list.ubicacion;
                            info.edad = list.edad;
                            info.tipoRecuperacion = list.tipo_recuperacion;
                            info.genero = list.sexo;
                            this.graphData.push(info);
                        }
                    });
                } else if (this.genreOption !== null && this.statusOption === null && this.cityOption !== null) {
                    this.getData.map((list) => {
                        if (list.sexo === this.genreOption && list.ciudad_municipio_nom === this.cityOption) {
                            let info = new Object();
                            info.id = list.id_de_caso;
                            info.estado = list.estado;
                            info.ciudad = list.ciudad_municipio_nom;
                            info.ubicacion = list.ubicacion;
                            info.edad = list.edad;
                            info.tipoRecuperacion = list.tipo_recuperacion;
                            info.genero = list.sexo;
                            this.graphData.push(info);
                        }
                    });
                } else if (this.genreOption === null && this.statusOption !== null && this.cityOption === null) {
                    this.getData.map((list) => {
                        if (list.estado === this.statusOption) {
                            let info = new Object();
                            info.id = list.id_de_caso;
                            info.estado = list.estado;
                            info.ciudad = list.ciudad_municipio_nom;
                            info.ubicacion = list.ubicacion;
                            info.edad = list.edad;
                            info.tipoRecuperacion = list.tipo_recuperacion;
                            info.genero = list.sexo;
                            this.graphData.push(info);
                        }
                    });
                } else if (this.genreOption === null && this.statusOption !== null && this.cityOption !== null) {
                    this.getData.map((list) => {
                        if (list.estado === this.statusOption && list.ciudad_municipio_nom === this.cityOption) {
                            let info = new Object();
                            info.id = list.id_de_caso;
                            info.estado = list.estado;
                            info.ciudad = list.ciudad_municipio_nom;
                            info.ubicacion = list.ubicacion;
                            info.edad = list.edad;
                            info.tipoRecuperacion = list.tipo_recuperacion;
                            info.genero = list.sexo;
                            this.graphData.push(info);
                        }
                    });
                } else if (this.genreOption === null && this.statusOption === null && this.cityOption !== null) {
                    this.getData.map((list) => {
                        if (list.ciudad_municipio_nom === this.cityOption) {
                            let info = new Object();
                            info.id = list.id_de_caso;
                            info.estado = list.estado;
                            info.ciudad = list.ciudad_municipio_nom;
                            info.ubicacion = list.ubicacion;
                            info.edad = list.edad;
                            info.tipoRecuperacion = list.tipo_recuperacion;
                            info.genero = list.sexo;
                            this.graphData.push(info);
                        }
                    });
                } else if (this.genreOption !== null && this.statusOption !== null && this.cityOption !== null) {
                    this.getData.map((list) => {
                        if (list.sexo === this.genreOption && list.ciudad_municipio_nom === this.cityOption && list.estado === this.statusOption) {
                            let info = new Object();
                            info.id = list.id_de_caso;
                            info.estado = list.estado;
                            info.ciudad = list.ciudad_municipio_nom;
                            info.ubicacion = list.ubicacion;
                            info.edad = list.edad;
                            info.tipoRecuperacion = list.tipo_recuperacion;
                            info.genero = list.sexo;
                            this.graphData.push(info);
                        }
                    });
                }
                this.genreOption = null;
                this.statusOption = null;
                this.cityOption = null;
                this.spinner = false;
            }, 500);

        },
        DeleteUser(id) {
            const index = this.getData.findIndex(index => index.id_de_caso === id);
            this.callDeleteUser(index);
            this.table = false;
            this.GraphTable();
        }, 

    },
    computed: {
        ...mapGetters(['getData', 'getStatusOptions', 'getCitiesOptions'])
    },

}
</script>

<style>

</style>