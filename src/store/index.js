import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      actualList: {id: '1', name: 'Mercado', color: '#000000'},
      taskList: [
        {id: 1, name: 'Mercado', color: '#000000'},
        {id: 2, name: 'Trabalho', color: '#8600b3'},
        {id: 3, name: 'Coisas Casa', color: '#70db70'},
        {id: 4, name: 'Lazer', color: '#997a00'},
       
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
  },
  mutations: {
    deleteTaskList(state, payload){
      const i = state.taskList.findIndex(item => item.id === payload.id)
      state.taskList.splice(i, 1)
    },
    editTaskList(state, payload){
      const i = state.taskList.findIndex(item => item.id === payload.id)
      state.taskList[i] = {
        name: payload.name, color: payload.color, test: i
      }
    },
    addTaskList(state, payload){
      state.taskList.push(payload)
    },
    deleteTasks(state, payload){
      var i = state.tasks.findIndex(item => item.idList === payload.id)
      while (i >= 0) {
        state.tasks.splice(i, 1)
        i = state.tasks.findIndex(item => item.idList === payload.id)
      }
    },
    deleteTask(state, payload){
      const i = state.tasks.findIndex(item => item.id === payload.id)
      state.tasks.splice(i, 1)
    },
    addTask(state, payload){
      state.tasks.push(payload)
    },
    check(state, payload){
      const i = state.tasks.findIndex(item => item.id === payload.id)
      const checked = !state.tasks[i].checked
      const icon = checked ? 'check_box' : 'check_box_outline_blank'
      Vue.set(state.tasks, i, {  ...state.tasks[i], checked, icon })
    },
    setActualList(state, payload){
      state.actualList = state.taskList.find(item => item.id === payload.id)
    }
  },
  actions: {
    ActionDeleteTaskList({ commit }, payload){
      commit('deleteTaskList', payload)
    },
    ActionEditTaskList({ commit }, payload){
      commit('editTaskList', payload)
    },
    ActionDeleteTasks({ commit }, payload){
      commit('deleteTasks', payload)
    },
    ActionDeleteTask({ commit }, payload){
      commit('deleteTask', payload)
    },
    ActionAddTaskList( { commit }, payload){
      return new Promise ( () =>{
        setTimeout(()=>{
          payload.id = Date.now()
          commit('addTaskList', payload)
        }, 300)
      })
    },
    ActionAddTask( { commit, state }, payload){
      return new Promise ( () =>{
        setTimeout(()=>{
          payload.idList = parseInt(state.actualList.id)
          payload.id = Date.now()
          payload.icon = 'check_box_outline_blank'
          commit('addTask', payload)
        }, 300)
      })
    },
    ActionCheck({ commit }, payload){
      commit('check', payload)
    },
    ActionSetActualList( { commit }, payload){
      commit('setActualList', payload)
    }
  },
  getters:{
    checked:(state) => (payload) => {
      return state.tasks.filter(item => item.checked === true &&  item.idList === payload)
      
    },    
    unchecked:(state) => (payload)=> {
      return state.tasks.filter(item => item.checked === false && item.idList === payload)
    }
  },
  modules: {
  }
})
