<template>
    <div>
        <span 
            v-if="config.confirmDelete"
            data-toggle="modal" data-target="#confirmDeleteModal" 
            class="material-icons mr-2">delete
        </span>
        <span 
            @click="deleteItem()"
            v-else class="material-icons mr-2">delete</span>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'NavDelete',
    computed:{
        ...mapState(['config'])
    },
    methods:{
        deleteItem(){
            this.$emit('deleteItem')
        }
}


}
</script>

<style>

</style>