<template>
  <div class="modal fade" id="confirmDeleteModal" tabindex="-1" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="confirmDeleteModalLabel">Excluir {{title}}?</h5>
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                Tem certeza que deseja excluir esta {{title.toLowerCase()}}?
                </div>
                <div class="modal-footer d-flex justify-content-around p-0">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="confirmDelete">
                        <label class="form-check-label" for="flexCheckDefault">
                            <small>Não pergunte novamente</small>
                        </label>
                    </div>
                    <div>
                        <button @click="resetCurrentItem" type="button" class="btn btn-warning btn-sm mr-1" data-dismiss="modal">
                            Cancelar
                        </button>
                        <button @click="deleteCurrentItem(item)" type="button" data-dismiss="modal" class="btn btn-danger btn-sm">
                            Excluir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DeleteModal',
    data(){
        return{
            confirmDelete: false
        }
    },
    props:{
        title: String,
        item: Object
        },
    methods: {
        deleteCurrentItem(item){
            if (this.confirmDelete) {
                this.$store.dispatch('ActionToggleConfirmDelete')
            }
            this.$emit('deleteCurrentItem', item)
        },
        resetCurrentItem(){
            this.$emit('resetCurrentItem')
        }
    }
}
</script>

<style lang="scss" scoped>
    .modal-footer {
        border-top: none;
    }
    .modal-header {
        border-bottom: none;
    }
</style>