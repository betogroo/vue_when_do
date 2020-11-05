<template>
  <div id="app">
    <OrderModal />
    <router-view/>
  </div>
</template>

<script>

import OrderModal from '@/components/OrderModal'
export default {
  name: 'App',
  components: {
    OrderModal
  }
}
</script>

<style lang="scss">
  #app{
    height: calc(100vh - 53px);
  }
</style>
