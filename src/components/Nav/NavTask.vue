<template>
  <div>
    
    <nav class="navbar bg-primary text-light">
        <div class="container-fluid">
            <div 
                class="navbar-toggler">
                <span  @click="back"
                    class="material-icons">close</span>
            </div>
            <span class="navbar-brand mb-0 mr-auto ml-2 h1">Editar Lista</span>
                <div class="d-flex justify-content-between">
                <span 
                    
                class="material-icons mr-2">redo</span>
                <span 
                    @click="deleteTask(task)"
                    class="material-icons mr-2">delete</span>
                <span 
                   @click="editTask(task)"
                    class="material-icons">check</span>
                
            </div>
        </div>
    </nav>

  </div>
</template>

<script>

export default {
    name: 'NavAddList',
    props: { task: Object },
    methods:{
        back(){
            this.$router.go(-1)
        },
        deleteTask(task){
            this.$emit('deleteTask', task)
        },
        editTask(task){
            this.$emit('editTask', task)
            console.log(task)

        }
        
    }
    
}
</script>

<style lang="scss" scoped>
    
   
</style>