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
                <span
                    v-for="(item, i) in items" :key="`menu_${i}`"
                    @click="$emit(item.action, payload, item.addMore)"
                    class="material-icons mr-2">{{item.icon}}</span>
                <NavOptions
                    v-if="navOptions"
                 />
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavOptions from './NavOptions'

export default {
   name: 'Navbar',
    components: {
        NavOptions
    },
    props: {
        title: String,
        toggleIcon: String,
        items: Array,
        navOptions: {
            type: Boolean,
            default: false
        },
        payload: Object,
        option: Boolean
    },
    computed:{
        ...mapState(['sidebarOpen']),
    },
    methods:{
        toggleAction(payload, option){
            this.$emit('toggleAction', payload, option)
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .fixed-top{
        z-index: 900;
    }
   
</style>