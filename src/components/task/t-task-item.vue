<template>
  <div class="t-task-item">
    <div
      class="tasklist__item d-flex justify-content-between"
    >
      <a href="#">{{task_data.title}}</a>
      <span>{{task_data.id}}</span>
      <div>
        <a href="#" class="redact">
          <img src="../../assets/img/pensel.svg" alt="redact"/>
        </a>
        <a href="#" class="deleteTask">
          <img
            src="../../assets/img/x.svg"
            alt="delete"
            @click="remove(task_data.id)"
            />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'task-item',
  props: {
    task_data: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    remove(id) {
      this.$emit('removeTask', id);
    },
  },
};
</script>

<style lang="scss">

</style>
