<template>
  <div>
      <Navbar
            toggleIcon="arrow_back"
            @toggleAction="$router.back()"

      />
     <h1>Página de Busca</h1>
  </div>
</template>

<script>
import Navbar from '@/components/Nav/Navbar'
export default {
    name: 'SearchTask',
    components: { Navbar }
}
</script>

<style lang="scss" scoped>
    .form-control{
        border: none;
        padding-top: 0;
        padding-bottom: 0;
        min-height: calc(1em + 0.5rem + 1px);
    }
</style>