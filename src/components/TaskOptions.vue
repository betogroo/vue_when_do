<template>
  <div class="task-options d-flex justify-content-between align-items-center">
            <div v-if="$route.name === 'Task'">
                <span 
                    @click="check(currentTask)"
                    class="material-icons-outlined mr-1">{{currentTask.checked ? 'check_box' : 'check_box_outline_blank'}}
                </span>
                <span 
                    @click="togglePriority(currentTask)"
                    :class="{'text-danger' : currentTask.priority}"
                    class="material-icons ml-1">error_outline</span>
            </div>
            <div v-if="$route.name === 'AddTask'">
                <span 
                    class="material-icons-outlined mr-1  text-muted">check_box_outline_blank
                </span>
                <span
                    @click="togglePriority(priority)"
                    :class="{'text-danger' : priority}"
                    class="material-icons ml-1">error_outline</span>
            </div>
            <button class="btn btn-sm btn-outline-secondary">Prazo, Lembrete Repetir</button>
        </div>
</template>

<script>
export default {
    name: 'TaskOptions',
    data(){
        return{
            priority: false
        }
    },
    props: {
        currentTask: Object
    },
    methods:{
        check(item){
            this.$emit('check', item)
            item.checked = !item.checked
            this.$store.dispatch('ActionSetCurrentTask', item)
        },
        togglePriority(item){
            if (this.$route.name === 'Task') {
               this.$emit('togglePriority', item)
                item.priority = !item.priority
                this.$store.dispatch('ActionSetCurrentTask', item)
            } 
            if(this.$route.name === 'AddTask') {
                this.priority = !item
                this.$emit('togglePriority', this.priority)
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .task-options{
        height: 65px;
    }
    .form-control{
        border: 0;

    }
</style>