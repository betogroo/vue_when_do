<template>
  <div>
        <Navbar 
            title="Editar Listas"
            toggleIcon="arrow_back"
            :items="itemsMenu"
            @toggleAction="$router.push({name: 'Home'})"
            @addList="addList"
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
        @click="editList(item)"
        v-for="item in taskList" :key="item.id"
        :style="`border-left: 5px solid ${item.color};`"
        class="list-group-item d-flex justify-content-between align-items-center">
            <div>{{item.name}}</div>
            <div class="text-muted">{{countChecked(item)}}/{{countUnchecked(item)}}</div>     
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Nav/Navbar'
import { mapGetters } from 'vuex'
export default {
    name:'EditTask',
    components: { Navbar },
    data(){
        return{
            itemsMenu: [
                {icon: 'add', action:'addList'}
            ]
        }
    },
    computed :{
        //...mapState(['taskList'])
        ...mapGetters(['taskList', 'checked', 'unchecked'])
    },
    methods:{
        editList(list){
            this.$store.dispatch('ActionSetActualList', list)
            this.$router.push({name: 'EditList'})
        },
        addList(){
            this.$router.push({name: 'AddList'})
        },
        countChecked(list){
           return this.checked(list.id).length
        },
        countUnchecked(list){
           return this.unchecked(list.id).length
        },
    }
}
</script>

<style lang="scss" scoped>
    
</style>