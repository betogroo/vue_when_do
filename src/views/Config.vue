<template>
  <div>
    <Navbar
      title="Configurações"
      toggleIcon = "arrow_back"
      @toggleAction="$router.back()"
    />
    <div class="config">
        <div class="card">
          <div class="card-header">Geral</div>
          <div class="card-body">
            <div 
              @click="toggleConfirmDelete"
              class="d-flex justify-content-between align-items-center">
              <div>
                <div class="config-title font-weight-bolder">Confirme o Apagar</div>
                <div class="config-text text-muted">Mostrar uma janela de confirmação de deletação.</div>
              </div>
              <span class="material-icons md-48" :class="config.confirmDelete ? 'text-primary' : 'text-muted'">{{config.confirmDelete ? 'toggle_on' : 'toggle_off'}}</span>
            </div>
          </div>
        </div>
    </div>
  </div>

</template>

<script>


import Navbar from '@/components/Nav/Navbar'
import { mapState } from 'vuex'
export default {
  name: 'Config',
  components: {
    Navbar
  },
  methods: {
    toggleConfirmDelete(){
      this.$store.dispatch('ActionToggleConfirmDelete')
    }
  },
  computed :{
    ...mapState(['config'])
  }
}
</script>

<style lang="scss" scoped>
 
</style>
