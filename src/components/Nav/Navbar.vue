<template>
  <div>
    <nav class="navbar bg-primary text-light fixed-top">
        <div class="container-fluid">
            <div class="navbar-toggler">
                <span
                    @click="toggleAction"
                    class="material-icons">{{toggleIcon}}</span>
            </div>
            <span class="navbar-brand mb-0 mr-auto ml-2 h1">{{title}}</span>
            <div class="d-flex justify-content-between">
                <template v-for="(item, i) in items" >
                    <span
                        :key="`menu_${i}`"
                        @click="$emit(item.action, payload, item.addMore)"
                        class="material-icons mr-2">{{item.icon}}
                    </span>
                </template>
                <NavSaveMore
                    v-if="$route.meta.navSaveMore"
                    @saveItem = "saveItem"
                    :item="item"
                />
                <NavSave
                    v-if="$route.meta.navSave"
                    @saveItem = "saveItem"
                    :item="item"
                />
                <NavMove
                    v-if="$route.meta.navMove"
                />
                <NavDelete
                    v-if="$route.meta.navDelete"
                    @deleteItem = "deleteItem"
                />
                
                <NavOptions
                    v-if="$route.meta.navOptions"
                 />
                <NavMic
                    v-if="$route.meta.navMic"
                 />
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavOptions from './NavOptions'
import NavDelete from './NavDelete'
import NavMove from './NavMove'
import NavSaveMore from './NavSaveMore'
import NavSave from './NavSave'
import NavMic from './NavMic'

export default {
   name: 'Navbar',
    components: {
        NavOptions, NavDelete, NavMic, NavMove, NavSaveMore, NavSave
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
        addeItem(item, option){
            this.$emit('addItem', item, option)
        }
    },
    created(){
        console.log(this.$route)
    }
    
}
</script>S

<style lang="scss" scoped>
    .fixed-top{
        z-index: 900;
    }
   
</style>