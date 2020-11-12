<template>
    <div>
        <span 
            @click="$router.push({name: 'SearchTask'})"
            class="material-icons mr-2">search</span>
        </div>
</template>

<script>

export default {
    name: 'NavSearch'
}
</script>

<style>

</style>