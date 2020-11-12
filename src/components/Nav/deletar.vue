<template>
  <div>
    <nav class="navbar bg-primary text-light">
        <div class="container-fluid">
            <div 
                class="navbar-toggler">
                <span  @click="back"
                    class="material-icons">arrow_back</span>
            </div>
            <div class="d-flex align-items-center">
            <span class="material-icons">
                search
            </span>
            <input 
                v-model="search"
                type="text" class="form-control form-control-sm m-1" id="formGroupExampleInput" placeholder="Procurar Tarefas">
            </div>
            <div class="d-flex justify-content-between">
                <span
                    @click="voiceSearch"
                    class="material-icons mr-2">keyboard_voice</span>
                </div>
        </div>
    </nav>
        <div class="head-bar d-flex text-primary">
            <div class="ml-2">Digite o texto na barra de pesquisa </div>
        </div>
  </div>
</template>

<script>

export default {
    name: 'NavSearch',
    components: { },
    data(){
        return{
        search:''
    }
    },
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
        },
        voiceSearch(){
            alert('Diga para pesquisar')
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
    .form-control{
        border: none;
        background-color:#0d6efd;
        color: white;
    }
    ::placeholder {
        color: rgba($color: #ffffff, $alpha: .6)

    }
</style>