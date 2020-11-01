<template>
  <div>
      <Backdrop
        @toggle-sidebar="toggleSidebar"
        v-if="sidebarOpen"
        />
        <Sidebar 
            :sidebarOpen="sidebarOpen"
            @toggleSidebar="toggleSidebar"
        />
    <nav class="navbar bg-primary text-light">
        <div class="container-fluid">
            
            <div class="navbar-toggler">
                <span
                    @click="toggleSidebar"
                    class="material-icons">menu</span>
            </div>
            <span class="navbar-brand mb-0 mr-auto ml-2 h1">{{actualList.name}}</span>
            <div class="d-flex justify-content-between">
                <span 
                    @click="$router.push({name: 'SearchTask'})"
                    class="material-icons mr-2">search</span>
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
import Sidebar from '@/components/Sidebar/Sidebar'
export default {
   name: 'Nav',
    components: {
        NavOptions, Backdrop, HeaderBar, Sidebar
    },
    data(){
        return{
            sidebarOpen: false,
        }
    },
    computed:{
        ...mapState(['actualList']),
        //...mapActions(['ActionSetActualList'])
    },
    methods:{
        toggleSidebar(){
            this.sidebarOpen = !this.sidebarOpen
        },
        addTask(){
            alert('Vendo uma maneira de conectar este método')
        }
    }
    
}
</script>

<style lang="scss" scoped>
    
   
</style>