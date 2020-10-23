<template>
  <div>
    
    <nav class="navbar bg-primary text-light">
        <div class="container-fluid">
            
            <div 
               
                class="navbar-toggler">
                <span  @click="back"
                    class="material-icons">close</span>
            </div>
            <span class="navbar-brand mb-0 mr-auto ml-2 h1">Nome da Lista</span>
            <div class="d-flex justify-content-between">
                <span 
                    @click="addTask(task, true)"
                class="material-icons mr-2">done_all</span>
                <span 
                    @click="addTask(task, false)"
                    class="material-icons mr-2">done</span>
                <NavOptions />
            </div>
        </div>
    </nav>

  </div>
</template>

<script>
import NavOptions from '@/components/Nav/NavOptions'
export default {
    name: 'Nav',
    components: { NavOptions },
    props: {
        task: Object,
        more: Boolean
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        addTask(task, more){
            this.$emit('add-task', task, more)
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