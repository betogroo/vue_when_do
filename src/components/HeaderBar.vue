<template>
    <div class="head-bar d-flex justify-content-end text-primary">
        <div class="mr-2">Ordernar por: </div>
        <div class="mx-2"><div class="dropdown-toggle" data-toggle="modal" data-target="#orderModal">Nome</div></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .head-bar{
        background-color: lightgray;
    }
    .dropdown-toggle{
        text-decoration: none;
    }
</style>