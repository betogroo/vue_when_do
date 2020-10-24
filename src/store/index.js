import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      list:'',
      taskList: [
        {id: '1', name: 'Mercado', color: '#000000'},
        {id: '2', name: 'Trabalho', color: '#8600b3'},
        {id: '3', name: 'Coisas Casa', color: '#70db70'},
        {id: '4', name: 'Lazer', color: '#997a00'},
       
      ],
      tasks: [
                {idList: 1, "checked":false,"title":"Maçã","id":1603473327910,"icon":"check_box_outline_blank"},
                {idList: 1, "checked":false,"title":"Banana","id":1603473332177,"icon":"check_box_outline_blank"},
                {idList: 1, "checked":false,"title":"Manga","id":1603473336494,"icon":"check_box_outline_blank"},
                {idList: 2, "checked":false,"title":"Movimentações","id":1606789342139,"icon":"check_box_outline_blank"},
                {idList: 2, "checked":false,"title":"Capturas","id":1603234346271,"icon":"check_box_outline_blank"},
                {idList: 3, "checked":false,"title":"Pintar parede","id":1603476342139,"icon":"check_box_outline_blank"},
                {idList: 3, "checked":false,"title":"Colocar Quadros","id":1603472346271,"icon":"check_box_outline_blank"},
                {idList: 4, "checked":false,"title":"Praia","id":1603234340121,"icon":"check_box_outline_blank"},
                {idList: 4, "checked":false,"title":"Casa de Campo","id":1641776342139,"icon":"check_box_outline_blank"},
                {idList: 4, "checked":false,"title":"andar de Bug","id":1603465746271,"icon":"check_box_outline_blank"}
              ],
      navbarMode: ''
  },
  mutations: {
    addTask(state, payload){
      state.tasks.push(payload)
    },
    check(state, payload){
      const i = state.tasks.findIndex(item => item.id === payload.id)
      const checked = !state.tasks[i].checked
      const icon = checked ? 'check_box' : 'check_box_outline_blank'
      Vue.set(state.tasks, i, {  ...state.tasks[i], checked, icon })
    },
    changeNavbarMode(state, payload){
      state.navbarMode = payload
    },
    setList(state, payload){
      state.list = payload
    }
  },
  actions: {
    ActionSetList({ commit }, payload){
      commit('setList', payload)
    },
    ActionAddTask( { commit }, payload){
      return new Promise ( () =>{
        setTimeout(()=>{
          payload.idList = 1
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
    checked:(state, getters) => {
      //const tasks = state.tasks.filter(item => item.idList === 1)
      return getters.filteredTasks.filter(item => item.checked === false)
    },    
    unchecked:(state, getters) => {
      //const tasks = state.tasks.filter(item => item.idList === 1)
      return getters.filteredTasks.filter(item => item.checked === true)
    },
    filteredTasks:(state, payload) => {
      payload = 4
      return state.tasks.filter(item => item.idList === payload)
    }
    
  },
  modules: {
  }
})
