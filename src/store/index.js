import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  getters: {
    getData(state){
      return state.data;
    }
  },
  mutations: {
    setData(state, info){
      state.data = info;
      console.log(state.data);
    }, 
    editPatient(state, newInfo){
      state.data.forEach((value, index) =>{
        if(newInfo.id_de_caso == value.id_de_caso){
            state.data[index] = newInfo;
            return;
        }
      })
    }
  },
  actions: {
    callMutationData({commit}, info2){
      commit('setData', info2);
    }, 

    callEditPatient({commit}, newInfo){
      // console.log(index, newInfo);
      commit('editPatient', newInfo);
    }
  },
  modules: {
  }
})
