<template>
    <div>
        <div>
            <Navbar/>
        </div>
        <label for="">Id</label>
        <b-form-input v-model="numberId" type="number" placeholder="Ingrese el id del caso a editar"></b-form-input>
        {{ numberId }}
        <label for="">Edad:</label>
        <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
        <b-button @click="editInfo(numberId)">Click me</b-button>
    </div>
</template>

<script>

import {mapActions, mapGetters, mapState} from 'vuex';
import Navbar from '../components/Nabvar.vue'

export default {
    components: {
        Navbar,
    },
    data() {
        return {
            text: '', 
            numberId: null
        }
    },
    methods: {
        ...mapActions(['callEditPatient']),

        editInfo(id){
            let newPaciente = {
            'id_de_caso': this.numberId,
            'departamento_nom' : this.text
            }
            console.log(newPaciente);
            this.callEditPatient(newPaciente);
            console.log(this.getData);
            console.log(newPaciente);
            // console.log(this.numberId);
        }

    },
    computed: {
        ...mapGetters(['getData']),
        ...mapState(['data'])
    },
}
</script>

<style>

</style>