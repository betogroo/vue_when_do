<template>
  <div>
    <div class="collapse" id="sidebar">
        <div class="bg-primary p-4">
            <h5 class="text-white h4">Isso vai virar o menu Lateral</h5>
            <span class="text-muted">Vai virar o menu lateral.</span>
        </div>
    </div>
    <nav class="navbar bg-primary text-light">
        <div class="container-fluid">
            <div class="navbar-toggler" data-toggle="collapse" data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="material-icons">menu</span>
            </div>
            <span class="navbar-brand mb-0 mr-auto ml-2 h1">Navbar</span>
            <div class="d-flex justify-content-between">
                
                <span class="material-icons mr-2">search</span>
                <NavOptions />
            </div>
        </div>

    </nav>

  </div>
</template>

<script>
import NavOptions from './NavOptions'
export default {
   name: 'Nav',
    components: {
            NavOptions 
            }
    
}
</script>

<style>
   
</style>