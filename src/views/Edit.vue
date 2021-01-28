<template>
    <div>
        <div>
            <Navbar/>
        </div>
    <div>
    <b-container class="containerEdit">
        <b-row class="abs-center">        
            <label class="labelId">Id:</label>
            <b-form-input class="input" v-model="numberId" type="number" placeholder="Enter the number id"></b-form-input>
            {{ numberId }}
            <label class="labelAge">Age:</label>
            <b-form-input v-model="text" placeholder="Enter the new age"></b-form-input>
            <b-button @click="editInfo(numberId)" class="buttonS">Send</b-button>
    </b-row>
    </b-container>
    </div>
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
    },
}
</script>

<style lang="scss">
.buttonS{
    margin-top: 10px;
    position: relative;
}
.containerEdit{
    margin-top: 40px;
    width: 250px;
    height: 250px;
    background: darkgrey;
    border-radius: 10px;
}

.labelAge{
    margin-top: 20px;
}

.labelId{
    margin-top: 20px;
}
.abs-center{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>