<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import axios from 'axios'
import {mapActions, mapGetters} from 'vuex'

export default {
  created () {
    this.getInfo();
    let result = this.$crontab.addJob({
      name: 'counter',
      interval: {
        seconds: '/600',
      },
      job: this.countUp
    })
  },
  methods: {
    countUp(){
      this.getInfo();
    }, 
    async getInfo() {
            let response = await axios.get('https://www.datos.gov.co/resource/gt2j-8ykr.json');
            this.callMutationData(response.data);
            this.callStatusOptions();
            this.callCityOption();
            this.callSetId();
            this.callUbicationOption();
            this.callRecuperationOption();
            // console.log(this.getData);
    },
        ...mapActions(['callMutationData', 'callStatusOptions', 
        'callCityOption', 'callSetId', 'callUbicationOption', 'callRecuperationOption']),

    },
    computed: {
        ...mapGetters(['getData', 'getStatusOptions', 'getCitiesOptions'])
    },

}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

