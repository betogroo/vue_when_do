<template>
    <div>
        <span 
            @click="saveItem(item, true)"
            class="material-icons mr-2">done_all</span>
        </div>
</template>

<script>

export default {
    name: 'NavSaveMore',
    props: { item: Object },
    methods:{
            saveItem(item, option){
                this.$emit('saveItem', item, option)
        }
    }


}
</script>

<style>

</style>