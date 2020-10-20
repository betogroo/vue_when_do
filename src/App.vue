<template>
  <div id="app">
    <OrderModal />
    <Nav />
    <HeaderBar />
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav/Nav'
import HeaderBar from '@/components/HeaderBar'
import OrderModal from '@/components/OrderModal'
export default {
  name: 'App',
  components: {
    Nav, HeaderBar, OrderModal
  }
}
</script>

<style lang="scss">
  #app{
    height: 100vh;
    background-color: salmon;
  }
</style>
