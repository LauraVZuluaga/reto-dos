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
    
    },
    methods: {

        // ...mapActions(['callMutationData']),

    },
    computed: {
        ...mapGetters(['getData'])
    },
}
</script>

<style>

</style>