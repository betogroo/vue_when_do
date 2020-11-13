<template>
    <div>
        <span 
            @click="saveItem(item, false)"
            class="material-icons mr-2">done</span>
        </div>
</template>

<script>

export default {
    name: 'NavSave',
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