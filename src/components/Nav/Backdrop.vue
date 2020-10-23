<template>
  <div 
    @click="$emit('toggle-sidebar')"
  class="backdrop"></div>
</template>

<script>
export default {
  methods:{
    beto(){
      alert('Beto')
    }
  }
}
</script>

<style lang="scss">

  .backdrop{
  background-color: rgba(0 , 0, 0, 0.5);
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  }
</style>