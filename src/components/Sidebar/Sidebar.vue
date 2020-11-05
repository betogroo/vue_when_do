<template>
  <div>
            <div
        :class="{'sidebar-open': sidebarOpen}"
        class="sidebar">
        <div class="siderbar-header d-flex bg-primary bg-gradient">
            <div class="d-flex align-items-center">
            <div>
                    <span class="material-icons md-48 ml-3">
                        account_circle
                    </span>
            </div>
                <div class="text-light ml-2">
                    <small>Conta do Google Tasks</small><br>
                    <small>{{loggedUser.email}}</small>
            </div>
           </div>
           <div class="align-self-end justify-content-end ml-auto pr-2">
            <span
                @click="toggleSidebarAcounts"
                class="material-icons-outlined">
                {{sidebarAcountsOpen ? 'arrow_drop_up' : 'arrow_drop_down' }}
            </span>
           </div>
           
        </div>
        <template v-if="sidebarAcountsOpen">
            <ul 
                class="list-group list-group-flush mt-2">
                <li class="list-group-item active d-flex align-items-center">
                    <span class="material-icons md-dark">person</span>
                    <div>
                        {{loggedUser.email}}
                    </div>
                    
                </li>
                <li class="d-flex list-group-item align-items-center">
                <span class="material-icons md-dark">person</span>
                    Conta Local
                </li>
            </ul>
                <hr>
            <ul 
                class="list-group list-group-flush">
                <li class="d-flex list-group-item align-items-center">
                    <span class="material-icons md-dark">add</span>
                    Adicionar Conta
                </li>
            </ul>
        </template>
        <template v-else>
        <ul 
            class="list-group list-group-flush mt-2">
             <li
                @click="goToAllTasks"
                class="list-group-item d-flex align-items-center">
                <span class="material-icons">event</span>
                <div class="p-1">Todas as Tarefas</div>
                <div class="text-muted ml-auto">{{countChecked(null)}}/{{countUnchecked(null)}}</div>
            </li> 
            <li  class="list-group-item d-flex align-items-center">
                <span class="material-icons">check_circle</span>
                <div class="p-1">Tarefas Finalizadas</div>
                <div class="text-muted ml-auto">{{countChecked(null)}}</div>
            </li>
        </ul>
            <hr>
           <div class="task-list">
                <ul class="list-group list-group-flush mr-2">
                    <li
                        @click="goToList(item)"
                        v-for="item in taskList" :key="item.id"
                        :style="`border-right: 5px solid ${item.color};`"
                        class="list-group-item d-flex align-items-center">
                        <span class="material-icons">menu</span>
                        <div class="p-1">{{item.name}}</div>
                        <small class="ml-auto text-sm text-black-50">{{countChecked(item.id)}}/{{countUnchecked(item.id)}}</small>
                    </li>
                </ul>
            </div>
            <hr>
        <ul class="list-group list-group-flush mr-2">
            <li @click="editLists" class="list-group-item d-flex align-items-center">
                <span class="material-icons">edit</span>
                <div class="p-1">Editar Listas</div>
            </li>
            <li @click="editNotebook" class="list-group-item d-flex align-items-center">
                <span class="material-icons">folder</span>
                <div class="p-1">Gerenciar Cadernos</div>
            </li>
            <hr>
             <li class="list-group-item d-flex align-items-center">
                <span class="material-icons">lock_open</span>
                <div class="p-1">Atualiza para pró</div>
            </li>
             <li  class="list-group-item d-flex align-items-center">
                <span class="material-icons">settings</span>
                <div class="p-1">Configurações</div>
            </li>
             <li  class="list-group-item d-flex align-items-center">
                <span class="material-icons">help_outline</span>
                <div class="p-1">Ajuda e Suporte</div>
            </li>
        </ul>
        </template>
      </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'Sidebar',
    data(){
        return{
            sidebarAcountsOpen: false,
        }
    },
    computed:{
        ...mapState(['actualList', 'sidebarOpen', 'loggedUser']),
        ...mapGetters(['taskList','checked', 'unchecked'])      
    },
    methods:{
        countChecked(list){
           return this.checked(list).length
        },
        countUnchecked(list){
           return this.unchecked(list).length
        },
        goToList(list){
            this.toggleSidebar()
            this.$store.dispatch('ActionSetActualList', list)
            if (this.$route.name != 'Home') {
                setTimeout(()=>{
                this.$router.push({name: 'Home'})
            }, 500) 
            }
            
           
           
        },
        goToAllTasks(){
            this.toggleSidebar()
            if (this.$route.name != 'AllTasks') {
                setTimeout(()=>{
                this.$router.push({name: 'AllTasks'})
            }, 500) 
            }
            
            
            
        },
        editLists(){
            this.toggleSidebar()
            setTimeout(()=>{
                this.$router.push({name: 'EditLists'})
                
            }, 500)  
        },
        editNotebook(){
            this.toggleSidebar()
            setTimeout(()=>{
                this.$router.push({name: 'Notebooks'})
                
            }, 500)  
        },
        toggleSidebarAcounts(){
            this.sidebarAcountsOpen = !this.sidebarAcountsOpen
        },
        back(){
            this.$router.go(1)
        },
        toggleSidebar(){
            this.$store.dispatch('ActionToggleSidebar')
        }
    }
}
</script>

<style lang="scss" scoped>
    .sidebar {
       z-index: 1000;
       color: black;
       width: 300px;
       background-color: white;
       position: fixed;
       left: -300px;
       height: calc(100vh - 1px);
       overflow-y: auto;
       transition: all 0.5s ease-out;
       opacity: .5;
   }
   .sidebar.sidebar-open{
       left: 0;
       opacity: 1;
   }

   .sidebar ul li{
       padding: 0.3em 1em;
       font-size: 0.9rem;
   }

   .sidebar ul li.divider{
       border-bottom: black;
       margin: 0.3em auto
   }
   .siderbar-header{
       height: 100px;
       border-bottom: 2px solid rgba($color: gray, $alpha:.5);
   }
    .list-group-item{
        padding: 0.5rem!important;
    }
    .list-group-item.active{
        padding: 0.5rem!important;
        color: black;
        background-color: lightgray;
        border-color: lightgray
    }
</style>