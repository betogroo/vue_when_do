import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      loading: false,
      config: 
        {confirmDelete: false}
      ,
      loggedUser: {
        name: 'Gerardo Soletra Maestrano',
        email: 'gerardo@ggmail.com'
      },
      actualList: {id: 3265987, idNotebook: 1, name: 'Mercado', color: '#000000'},
      currentNotebook: { id: 1, name: 'Pessoal'},
      notebooks:[
        {id: 1, name: 'Pessoal'},
        {id: 2, name: 'Trabalho'},
        {id: 3, name: 'Freelance'}
      ],
      taskList: [
        {id: 3265987, idNotebook: 1, name: 'Mercado', color: '#000000'},
        {id: 1234567, idNotebook: 2, name: 'Trabalho', color: '#8600b3'},
        {id: 1478523, idNotebook: 1, name: 'Coisas Casa', color: '#70db70'},
        {id: 9632587, idNotebook: 1, name: 'Lazer', color: '#997a00'},
        {id: 7946135, idNotebook: 3, name: 'Concursos', color: '#babaca'},
       
      ],
      tasks: [
                {idList: 3265987,  "checked":false, "priority": false, "note" : "Aqui vai a nota", "title":"Maçã","id":1603473327910},
                {idList: 3265987,  "checked":false, "priority": false, "note" : "Aqui vai a nota", "title":"Consertar Torneira","id":1600183327910},
                {idList: 3265987,  "checked":true, "priority": false, "note" : "Aqui vai a nota", "title":"Banana","id":1603473332177},
                {idList: 3265987,  "checked":false, "priority": false, "note" : "Aqui vai a nota", "title":"Manga","id":1603473336494},
                {idList: 3265987,  "checked":false, "priority": false, "note" : "Aqui vai a nota", "title":"Pera","id":1603412327910},
                {idList: 3265987,  "checked":true, "priority": false, "note" : "Aqui vai a nota", "title":"Uva","id":1603473332327},
                {idList: 3265987,  "checked":false, "priority": false, "note" : "Aqui vai a nota", "title":"Melancia","id":1656473336494},
                {idList: 3265987,  "checked":false, "priority": false, "note" : "Aqui vai a nota", "title":"Abóbora","id":1603476327910},
                {idList: 3265987,  "checked":true, "priority": false, "note" : "Aqui vai a nota", "title":"leite","id":1603473892177},
                {idList: 3265987,  "checked":false, "priority": false, "note" : "Aqui vai a nota", "title":"Pão","id":1603473337894},
                {idList: 1234567,  "checked":false, "priority": false, "note" : "Aqui vai a nota", "title":"Movimentações","id":1606789342139},
                {idList: 1234567,  "checked":true, "priority": false, "note" : "Aqui vai a nota", "title":"Capturas","id":1603234346271},
                {idList: 1478523,  "checked":false, "priority": false, "note" : "Aqui vai a nota", "title":"Pintar parede","id":1603476342139},
                {idList: 1478523,  "checked":true, "priority": false, "note" : "Aqui vai a nota", "title":"Colocar Quadros","id":1603472346271},
                {idList: 9632587,  "checked":false, "priority": false, "note" : "Aqui vai a nota", "title":"Praia","id":1603234340121},
                {idList: 9632587,  "checked":false, "priority": false, "note" : "Aqui vai a nota", "title":"Casa de Campo","id":1641776342139},
                {idList: 9632587,  "checked":true, "priority": false, "note" : "Aqui vai a nota", "title":"Andar de Bug","id":1603465746271},
                {idList: 7946135,  "checked":false, "priority": false, "note" : "Aqui vai a nota", "title":"Analisar Edital","id":16034097646271}
              ],
      currentTask: {},
      sidebarOpen: false
  },
  mutations: {
    setLoading(state, payload){
      state.loading = payload
    },
    toggleConfirmDelete(state){
      state.config.confirmDelete = !state.config.confirmDelete
    },
    toggleSidebar(state){
      state.sidebarOpen = !state.sidebarOpen
    },
    deleteTaskList(state, payload){
      const i = state.taskList.findIndex(item => item.id === payload.id)
      state.taskList.splice(i, 1)
    },
    editTaskList(state, payload){
      const i = state.taskList.findIndex(item => item.id === payload.id)
      const name = payload.name
      const color =  payload.color
      Vue.set(state.taskList, i, {...state.taskList[i], name, color})
    },
    editTask(state, payload){
      const i = state.tasks.findIndex(item => item.id === payload.id)
      const title = payload.title
      const note = payload.note
      Vue.set(state.tasks, i, { ...state.tasks[i], title, note })
    },
    addNotebook(state, payload ){
      state.notebooks.push(payload)
    },
    addTaskList(state, payload){
      state.taskList.push(payload)
      state.actualList = state.taskList[state.taskList.length -1]
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
    moveTask(state, payload){
        const i = state.tasks.findIndex(item => item.id === state.currentTask.id)
        const idList = payload.id
        Vue.set(state.tasks, i, { ...state.tasks[i], idList})
    },
    moveTaskList(state, payload){
        const i = state.taskList.findIndex(item => item.id === state.actualList.id)
        const idNotebook = payload.id
        Vue.set(state.taskList, i, { ...state.taskList[i], idNotebook})
    },
    setCurrentTask( state, payload){
      state.currentTask = payload
    },
    addTask(state, payload){
      state.tasks.push(payload)
    },
    check(state, payload){ //mudar nome
      const i = state.tasks.findIndex(item => item.id === payload.id)
      const checked = !state.tasks[i].checked
      Vue.set(state.tasks, i, {  ...state.tasks[i], checked })
    },
    togglePriority(state, payload){
     const i = state.tasks.findIndex(item => item.id === payload.id)
      const priority = !state.tasks[i].priority
      Vue.set(state.tasks, i, {...state.tasks[i], priority})
    },
    setActualList(state, payload){
      state.actualList = state.taskList.find(item => item.id === payload.id)
    },
    resetActualList(state){
      state.actualList = null
    },
    setActualTask(state, payload){
      state.actualTask = state.tasks.find(item => item.id === payload.id)
    },
    setCurrentNotebook(state, payload){
      state.currentNotebook = state.notebooks.find(item => item.id === payload.id)
    }
  },
  actions: {
    ActionSetLoading( { commit }, payload){
      commit('setLoadin', payload)
    },
    ActionToggleConfirmDelete({ commit }){
      commit('toggleConfirmDelete')
    },
    ActionToggleSidebar({ commit }){
      commit('toggleSidebar')
    },
    ActionDeleteTaskList({ commit }, payload){
      commit('deleteTaskList', payload)
    },
    ActionEditTaskList({ commit }, payload){
      commit('editTaskList', payload)
    },
    ActionDeleteTasks({ commit }, payload){
      commit('deleteTasks', payload)
    },
    ActionMoveTask( {commit }, payload){
      commit('moveTask', payload)
    },
    ActionMoveTaskList( {commit }, payload){
      commit('moveTaskList', payload)
    },
    ActionDeleteTask({ commit }, payload){
      commit('deleteTask', payload)
    },
    ActionSetCurrentTask( { commit }, payload){
      commit('setCurrentTask', payload)
    },
    ActionEditTask({ commit }, payload){
      commit('editTask', payload)
    },
    ActionAddTaskList( { commit, state }, payload){
      return new Promise ( () =>{
        setTimeout(()=>{
          payload.idNotebook = parseInt(state.currentNotebook.id)
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
          commit('addTask', payload)
        }, 300)
      })
    },
    ActionAddNotebook( {commit }, payload){
      return new Promise ( () =>{
        setTimeout(()=>{
          payload.id = Date.now()
          commit('addNotebook', payload)
        }, 300)
      })
    },
    ActionCheck({ commit }, payload){ // mudar nome
      commit('check', payload)
    },
    ActionTogglePriority({ commit }, payload){
      commit('togglePriority', payload)
    },
    ActionSetActualList( { commit }, payload){
      commit('setActualList', payload)
    },
    ActionResetActualList( { commit }){
      commit('resetActualList')
    },
    ActionSetActualTask({ commit }, payload){
      commit('setActualTask', payload)
    },
    ActionSetCurrentNotebook({ commit }, payload){
      commit('setCurrentNotebook', payload)
    }
  },
  getters:{
    checked:(state) => (payload) => {
      if (payload != null) {
        return state.tasks.filter(item => item.checked === true &&  item.idList === payload)
      }else{
        return state.tasks.filter(item => item.checked === true)
      }
      
    },
    unchecked:(state) => (payload)=> {
      if (payload != null) {
        return state.tasks.filter(item => item.checked === false && item.idList === payload)
      } else {
        return state.tasks.filter(item => item.checked === false)
      }
     
    },
    currentTask:(state) => (payload) =>{
      const i  =  state.tasks.findIndex( item => item.id == payload)
      return state.tasks[i]
    },
    taskList: state => {
      return state.taskList.filter(item => item.idNotebook === parseInt(state.currentNotebook.id))
    },
    countLists: (state) => (payload) =>{
      return state.taskList.filter( item => item.idNotebook === parseInt(payload.id)).length
    }
  },
  modules: {}

})