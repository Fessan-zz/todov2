<template>
  <div class="task-add">
    <div class="tasklist__wrap container">
      <h1 class="text-center">Список задач</h1>
      <div class="task-line mb-4"></div>
      <form  class="redact__task  form-group" @submit.prevent="addTask">
        <div class="d-flex justify-content-between p-3">
          <h3>Добавление задачи</h3>
          <a
            href="#"
          >
            <img
              src="../../assets/img/xgreen.svg"
              alt="del"
              @click="closeAdd"
            >
            </a>
        </div>

        <span class="redact_span ml-3">Наименование задачи</span>
        <div
          :class="{ 'errorInput': ($v.titleTask.$dirty && $v.titleTask.$error)}"
        >
          <input
          type="text"
          class="form-control mt-3 redact_input"
          placeholder="Введите новое название задачи"
          v-model.trim="$v.titleTask.$model"
        >
        <div class="error" v-if="!$v.titleTask.required">Поле обязательно для заполнения</div>
        <div class="error" v-if="!$v.titleTask.minLength">
            Задача не меньше {{ $v.titleTask.$params.minLength.min }} символов
        </div>
        </div>
        <button type="submit" class="btn btn-success mb-3 r-3">Готово</button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'task-add',
  data() {
    return {
      titleTask: '',
    };
  },
  computed: {
    ...mapGetters(['GET_ALL_TASKS']),
  },
  methods: {
    ...mapActions(['CREATE_TASKS']),
    closeAdd() {
      this.$emit('showAddInComponents');
    },
    async addTask() {
      try {
        const task = await this.CREATE_TASKS(this.titleTask);
        console.log(task);
        this.closeAdd();
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
  },
  validations: {
    titleTask: {
      required,
      minLength: minLength(6),
    },

  },
};
</script>

<style lang="scss" >

</style>
