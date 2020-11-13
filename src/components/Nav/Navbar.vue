<template>
  <div>
    <nav class="navbar bg-primary text-light fixed-top">
        <div class="container-fluid d-flex p-0">
            <div class="d-flex align-items-center">
                <div class="navbar-toggler">
                    <span
                        @click="toggleAction"
                        class="material-icons">{{toggleIcon}}</span>
                </div>
                <template v-if="$route.meta.navSearchForm" >
                    <NavSearchForm />
                </template>
                
                <template v-else>
                    <span class="navbar-brand mb-0 mr-auto ml-2 h1">{{title}}
                    </span>
                </template>
            </div>
            
            
            <div class="d-flex align-items-center navbar-toggler">
                <NavSaveMore
                    v-if="$route.meta.navSaveMore"
                    @saveItem = "saveItem"
                    :item="item"
                />
                <NavMove
                    v-if="$route.meta.navMove"
                    @moveItem = "moveItem"
                    :item="item"
                />
                <NavDelete
                    v-if="$route.meta.navDelete"
                    @deleteItem = "deleteItem"
                />
                 <NavSave
                    v-if="$route.meta.navSave"
                    @saveItem = "saveItem"
                    :item="item"
                />
                <NavAdd 
                    v-if="$route.meta.navAdd"
                    @addItem="addItem"
                />
                <NavSearch
                    v-if="$route.meta.navSearch"
                    @searchItem="searchItem"
                />
                <NavMic
                    v-if="$route.meta.navMic"
                 />
                 <NavOptions
                    v-if="$route.meta.navOptions"
                    
                 />
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavOptions from './Command/NavOptions'
import NavDelete from './Command/NavDelete'
import NavMove from './Command/NavMove'
import NavSaveMore from './Command/NavSaveMore'
import NavSave from './Command/NavSave'
import NavAdd from './Command/NavAdd'
import NavSearch from './Command/NavSearch'
import NavSearchForm from './Command/NavSearchForm'
import NavMic from './Command/NavMic'

export default {
   name: 'Navbar',
    components: {
        NavOptions, NavDelete, NavMic, NavMove, NavSaveMore, NavSave, NavAdd, NavSearch, NavSearchForm
    },
    props: {
        title: String,
        toggleIcon: String,
        items: Array,
        payload: Object,
        item: Object,
        option: Boolean
    },
    computed:{
        ...mapState(['sidebarOpen', 'config']),
    },
    methods:{
        toggleAction(payload){
            this.$emit('toggleAction', payload)
        },
        deleteItem(){
            this.$emit('deleteItem')
        },
        saveItem(item, option){
            this.$emit('saveItem', item, option)
        },
        addItem(){
            this.$emit('addItem')
        },
        moveItem(item){
            this.$emit('moveItem', item)
        },
        searchItem(){
            this.$emit('searchItem')
        }
    }
}
</script>

<style lang="scss" scoped>
    .fixed-top{
        z-index: 900;
    }
.command{
    padding: 0.25rem;
}
   
</style>