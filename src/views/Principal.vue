<template>
  <div>
      <Navbar/>
  </div>
</template>

<script>

import axios from 'axios'
import {mapActions, mapGetters} from 'vuex'
import Navbar from '../components/Nabvar.vue'

export default {
    components: {
        Navbar,
    },
    data() {
        return {
       
        }
    },
    created () {
        this.getInfo();
    },
    methods: {

        ...mapActions(['callMutationData']),

        async getInfo() {
            let response = await axios.get('https://www.datos.gov.co/resource/gt2j-8ykr.json');
            this.callMutationData(response.data);
            console.log(this.getData);
        }
    },
    computed: {
        ...mapGetters(['getData'])
    },
}
</script>

<style>

</style>