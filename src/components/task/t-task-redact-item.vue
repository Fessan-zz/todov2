<template>
  <div class="task-redact-item">
    <div class="modal-redact"
      >
        <form class="redact__task form-group modal__form">
          <div class="d-flex justify-content-between p-3">
            <h3>Редактирование задачи</h3>
            <a href="#">
              <img src="../../assets/img/xgreen.svg" alt="del" />
            </a>
          </div>

          <span class="redact_span ml-3">Наименование задачи</span>
          <input
            type="text"
            class="form-control mt-3 redact_input"
            placeholder="Введите новое название задачи"
          />
          <button type="submit" class="btn btn-success mb-3 r-3">Готово</button>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'task-redact-item',
};
</script>

<style lang="scss">

</style>
