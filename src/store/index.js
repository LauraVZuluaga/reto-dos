import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [], 
    status: [], 
    cities: [], 
    ubication: [],
    recuperation: [],
    id: null
  },
  getters: {
    getData(state){
      return state.data;
    },
    getStatusOptions(state){
      return state.status;
    },
    getCitiesOptions(state){
      return state.cities;
    },
    getUbicationOption(state){
      return state.ubication;
    },
    getRecuperationOption(state){
      return state.recuperation;
    },
    getIdUsers(state){
      return state.id;
    }
  },
  mutations: {
    setData(state, info){
      state.data = info;
      console.log(state.data);
    }, 
    editPatient(state, user){
        let number = 1;
        state.data.map((info) => {
          if (user.id_de_caso === info.id_de_caso) {
             state.data[number] = user;
             return;
          }
          number ++;
        });
    }, 
    statusOptions(state) {
      let statusList = [];
      state.data.map((list) => {
        statusList.push(list.estado);
      })
      state.status = [... new Set(statusList)]
      // console.log(state.status);
    }, 
    cityOption(state){
      let cityList = [];
      state.data.map((list) => {
        cityList.push(list.ciudad_municipio_nom);
      })
      state.cities = [... new Set(cityList)]
      // console.log(state.cities);
    }, 
    ubicationOption(state){
      let ubicationList = [];
      state.data.map((list) =>{
        ubicationList.push(list.ubicacion);
      })
      state.ubication = [... new Set(ubicationList)]
    },
    recuperationOption(state){
      let recuperationList = [];
      state.data.map((list) =>{
        recuperationList.push(list.tipo_recuperacion);
      })
      state.recuperation = [... new Set(recuperationList)]
    },
    deleteUser(state, index){
      state.data.splice(index, 1);
    }, 
    addUser(state, user){
      state.data.push(user);
    },
    incrementId(state){
      state.id++;
    }, 
    setId(state){
      state.id = state.data.length+1;
    }
  },
  actions: {
    callMutationData({commit}, info2){
      commit('setData', info2);
    }, 

    callEditPatient({commit}, newInfo){
      // console.log(index, newInfo);
      commit('editPatient', newInfo);
    }, 
    callStatusOptions({commit}){
      commit('statusOptions');
    }, 
    callCityOption({commit}){
      commit('cityOption');
    },
    callUbicationOption({commit}){
      commit('ubicationOption');
    },
    callRecuperationOption({commit}){
      commit('recuperationOption')
    },
    callDeleteUser({commit}, index){
      commit('deleteUser', index);
    },
    callAddUser({commit}, user){
      commit('addUser', user);
    }, 
    callIncrementId({commit}){
      commit('incrementId');
    },
    callSetId({commit}){
      commit('setId');
    }
  },
  modules: {
  }
})
