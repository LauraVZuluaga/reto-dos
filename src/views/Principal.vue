<template>
  <div>
      <Navbar/>
      <div class="imgSearch">
          <h1>Welcome to the CovidApp</h1>
          <img src="../assets/undraw_people_search_wctu.png" alt="Search Image" width="660px">
           
      </div>
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

<style lang="scss">
.imgSearch{
    align-items: center
}
.imgSearch h1{
    margin-top: 10px
}
</style>