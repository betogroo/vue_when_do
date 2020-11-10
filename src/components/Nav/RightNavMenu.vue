<template>
    <span
        @click="$emit(item.action, payload, item.addMore)"
        class="material-icons mr-2">{{item.icon}}
    </span>
</template>

<script>
export default {
    name: 'RightNavMenu'
}
</script>

<style>

</style>