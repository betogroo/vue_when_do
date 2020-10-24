<template>
    <div class="head-bar d-flex justify-content-end text-primary cursor-pointer" data-toggle="modal" data-target="#orderModal">
        <div class="mr-2">Ordernar por: </div>
        <div class="mx-2"><div class="dropdown-toggle" >Nome</div></div>
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
    .cursor-pointer{
        cursor: pointer;
    }
</style>