<template>
  <div>
    <Navbar 
      toggleIcon="arrow_back"
      title="Gerenciar Cadernos"
      @toggleAction="$router.back()"
      @addItem="addNotebook"
    />
    
    <ul class="list-group">
      <li 
        v-for="item in notebooks" :key="item.id"
        class="d-flex list-group-item">
        <div class="form-check mr-2">
          <input
            @click="setNotebook(item)"
            class="form-check-input" type="radio" name="flexRadioDefault" :id="`notebook_${item.id}`">
        </div>
        <div
          @click="setNotebook(item)"
          class="ml-2">{{item.name}}</div>
        <div class="ml-auto text-muted">{{countLists(item)}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import Navbar from '@/components/Nav/Navbar'
import { mapState } from 'vuex'
export default {
    name:'EditTask',
    components: { Navbar },
    methods:{
      addNotebook(){
        this.$router.push({name: 'AddNotebook'})
      },
      editNotebook(notebook){
        alert(`Vai para os detalhes do Caderno ${notebook.name}`)
      },
      setNotebook(notebook){
        this.$store.dispatch('ActionSetCurrentNotebook', notebook)
        this.$router.push({name: 'EditLists'})
      },
      countLists(list){
        return this.$store.getters['countLists'](list)
      }
    },
    computed:{
      ...mapState(['notebooks'])
    }
}
</script>

<style lang="scss" scoped>
    .form-check{
      border: none;
border-right: 1px solid rgba($color: #000000, $alpha: 0.5);
    }
</style>