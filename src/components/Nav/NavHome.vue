<template>
  <div>
      <Backdrop
        @toggle-sidebar="toggleSidebar"
        v-if="sidebarOpen"
        />
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
                    <small>luizhumberto@gmail.com</small>
            </div>
           </div>
           <div class="d-flex align-self-end justify-content-end">
            <span
                @click="toggleSidebarAcounts"
                class="material-icons">
                {{sidebarAcountsOpen ? 'arrow_drop_up' : 'arrow_drop_down' }}
            </span>
           </div>
           
        </div>
        <ul 
            v-if="sidebarAcountsOpen"
            class="list-unstyled font-weight-bold">
            <li class="text-reset">luizhumberto@gmail.com</li>
            <li class="text-reset">Conta Local</li>
            <li class="text-reset">Adicionar Conta</li>
           
            <button @click="toggleSidebar">Fechar</button>
        </ul>
        <ul 
            v-else
            class="list-unstyled font-weight-bold overflow-auto">
            <li class="text-reset">Todas as Tarefas</li>
            <li class="text-reset">Tareflas Finalizadas</li>
            <li class="text-reset">Lista 1</li>
            <li class="text-reset">Lista 2</li>
            <li class="text-reset">Lista 3</li>
            <li class="text-reset">Lista 4</li>
            <li class="text-reset">Lista 5</li>
            <li class="text-reset">Lista 6</li>
            <li class="divider"></li>
            <li class="text-reset">Editar Lista</li>
            <li class="text-reset">Gerenciar Cadernos</li>
            <li class="divider"></li>
            <li class="text-reset">Atualiza para o pro</li>
            <li class="text-reset">Configurações</li>
            <li class="text-reset">Ajuda e Suporte</li>
            <button @click="toggleSidebar">Fechar</button>
        </ul>
      </div>
      
    <nav class="navbar bg-primary text-light">
        <div class="container-fluid">
            
            <div class="navbar-toggler">
                <span
                    @click="toggleSidebar"
                    class="material-icons">menu</span>
            </div>
            <span class="navbar-brand mb-0 mr-auto ml-2 h1">Nome da Lista</span>
            <div class="d-flex justify-content-between">
                <span class="material-icons mr-2">search</span>
                <NavOptions />
            </div>
        </div>
    </nav>
     <HeaderBar />

  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavOptions from './NavOptions'
import HeaderBar from '../HeaderBar'
import Backdrop from './Backdrop'
export default {
   name: 'Nav',
    components: {
        NavOptions, Backdrop, HeaderBar
    },
    data(){
        return{
            sidebarOpen: false,
            sidebarAcountsOpen: false
        }
    },
    computed:{
        ...mapState(['navbarMode'])
    },
    methods:{
        toggleSidebar(){
            this.sidebarOpen = !this.sidebarOpen
        },
        toggleSidebarAcounts(){
            this.sidebarAcountsOpen = !this.sidebarAcountsOpen
        },
        back(){
            this.$router.go(1)
        },
        addTask(){
            alert('Vendo uma maneira de conectar este método')
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
       //top: 60;
       height: calc(100vh - 30px);
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
   }

   .sidebar ul li.divider{
       border-bottom: black;
       margin: 0.3em auto
   }

   .media-avatar img{
       height: 38px;
   }
   .siderbar-header{
       height: 100px;
       border-bottom: 2px solid rgba($color: gray, $alpha:.5);
       
   }
</style>