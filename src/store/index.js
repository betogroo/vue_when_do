import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      tasks: [],
      navbarMode: ''
  },
  mutations: {
    addTask(state, payload){
      state.tasks.push(payload)
    },
    check(state, payload){
      const i = state.tasks.findIndex(item => item.id === payload.id)
      const checked = !state.tasks[i].checked
      const icon = checked ? 'check_box_outline' : 'check_box_outline_blank'
      Vue.set(state.tasks, i, {  ...state.tasks[i], checked, icon })
    },
    changeNavbarMode(state, payload){
      state.navbarMode = payload
    }
  },
  actions: {
    ActionAddTask( { commit }, payload){
      return new Promise ( () =>{
        setTimeout(()=>{
          payload.id = Date.now()
          payload.icon = 'check_box_outline_blank'
          commit('addTask', payload)
        }, 300)
      })
    },
    ActionCheck({ commit }, payload){
      commit('check', payload)
    },
    ActionChangeNavbarMode({ commit }, payload){
      commit('changeNavbarMode', payload)
    }
  },
  getters:{
    checked(state){
      return state.tasks.filter(item => item.checked === false)
    },    
    unchecked(state){
      return state.tasks.filter(item => item.checked === true)
    }    
  },
  modules: {
  }
})
