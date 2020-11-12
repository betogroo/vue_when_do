<template>
  <div class="modal fade" id="orderModal" tabindex="-1" aria-labelledby="orderModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
            <h6 class="font-weight-bold">Ordenar por</h6>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="orderRadio" id="orderRAdioOrder">
                <label class="form-check-label" for="orderaAdio">Ordem</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="orderRadio" id="orderRAdioTerm">
                <label class="form-check-label" for="orderRadio">Prazo</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="orderRadio" id="orderRAdioproority">
                <label class="form-check-label" for="orderRadio">Urgente</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="orderRadio" id="orderRAdioAlphabrtic">
                <label class="form-check-label" for="orderRadio">Alfabético</label>
            </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'SortModal'
}
</script>

<style>

</style>