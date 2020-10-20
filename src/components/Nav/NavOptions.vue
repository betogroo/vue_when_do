<template>
  <div class="dropleft">
    <span class="material-icons" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">more_vert</span>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#" data-toggle="modal" data-target="#orderModal">Ordenar</a></li>
        <li><a class="dropdown-item" href="#">Demarcar Tarefas Concluídas</a></li>
        <li><a class="dropdown-item" href="#">Excluir Tarefas Concluídas</a></li>
        <li><a class="dropdown-item" href="#">Esconder Tarefas Concluídas</a></li>
        <li><a class="dropdown-item" href="#">Enviar</a></li>
        <li><a class="dropdown-item" href="#">Forçar Sincronização</a></li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'NavOptions'
}
</script>

<style>

</style>