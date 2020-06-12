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
        <t-task-item/>
      </div>
      <t-task-redact-item
        v-if="false"
        />
    </div>
  </div>
  </div>
</template>

<script>

import tTaskRedactItem from '@/components/task/t-task-redact-item.vue';
import tTaskItem from '@/components/task/t-task-item.vue';

export default {
  name: 'task-list',
  components: {
    tTaskRedactItem,
    tTaskItem,
  },
};
</script>

<style lang="scss">

</style>
