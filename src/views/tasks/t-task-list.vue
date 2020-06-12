<template>
  <div class="t-task-list">
    <div class="container">


    <div class="tasklist__wrap container">
      <h1 class="text-center">Список задач</h1>
      <div class="task-line mb-4"></div>
      <div class="row d-flex justify-content-between mb-5">
        <div class="add__task d-flex justify-content-center align-items-center">
          <a href="/add">
            <img src="../../assets/img/addtask.svg" alt="Add Task" />
          </a>
        </div>
        <div class="dropdown__tasklist d-flex justify-content-center align-items-center">
          <a href="#">
            Все
            <img src="../../assets/img/arrowDown.png" alt="Down" />
          </a>
        </div>
      </div>

      <div class="tasklist">
        <div
          class="tasklist__item d-flex justify-content-between"
        >
          <a href="#">name</a>
          <div>
            <a href="#" class="redact"
             >
              <img src="../../assets/img/pensel.svg" alt="redact"
              />
            </a>
            <a href="#" class="deleteTask" v-on:click="delTodo(item.id)">
              <img src="../../assets/img/x.svg" alt="delete" />
            </a>
          </div>
        </div>
      </div>

      <!---     modal  Redact Task-->

    </div>
      <!-- <div class="modal-redact"
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
      </div> -->

  </div>
  </div>
</template>

<script>
export default {
  name: 'task-list',
};
</script>

<style lang="scss">

</style>
