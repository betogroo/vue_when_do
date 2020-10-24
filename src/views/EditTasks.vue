<template>
  <div>
      <NavEdit
      />
    <div class="task-options">
        <div class="d-flex bd-highlight p-1">
            <div class="bd-highlight">
                <span class="material-icons">event</span>
            </div>
            <div class="bd-highlight">Todas as Tarefas</div>
            <div class="ml-auto bd-highlight">
                <span class="material-icons">check_box</span>
            </div>
        </div>
        <div class="d-flex bd-highlight p-1">
            <div class="bd-highlight">
                <span class="material-icons">check_circle</span>
            </div>
            <div class="bd-highlight">Tarefas Finalizadas</div>
            <div class="ml-auto bd-highlight">
                <span class="material-icons">check_box</span>
            </div>
        </div>
    </div>
    <div class="task-list">
        <ul class="list-group list-group-flush p-1">
      <li
        v-for="item in taskList" :key="item.id"
        :style="`border-left: 5px solid ${item.color};`"
        class="list-group-item d-flex align-items-center">
                    {{item.name}}
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
import NavEdit from '@/components/Nav/NavEdit'
import { mapState } from 'vuex'
export default {
    name:'EditTask',
    components: { NavEdit },
    computed :{
        ...mapState(['taskList'])
    },
    beforeMount(){
        this.changeNavbarMode('Add')
    }
}
</script>

<style lang="scss" scoped>
    
</style>