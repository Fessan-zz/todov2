<template>
  <div class="t-task-list">
    <t-nav-bar />
    <div class="container">
      <t-task-add
        v-if="showAddTask"
        @showAddInComponents="showAddTaskFunc"
      />

      <div class="tasklist__wrap container"  v-else>
        <h1 class="text-center">Список задач</h1>
        <div class="task-line mb-4"></div>
        <div class="row d-flex justify-content-between mb-5">
          <div class="add__task d-flex justify-content-center align-items-center">
            <a
              @click="showAddTask = !showAddTask"
            >
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
          <t-task-item
            v-for="task in GET_ALL_TASKS"
            :key="task.id"
            :task_data="task"
            @removeTask="removeTask"
          />
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
import tNavBar from '@/components/layouts/t-nav-bar.vue';
import tTaskAdd from '@/components/task/t-task-add.vue';

import { mapGetters, mapActions } from 'vuex';


export default {
  name: 'task-list',
  data() {
    return {
      showAddTask: false,
      tasks: {},
    };
  },
  components: {
    tTaskRedactItem,
    tTaskItem,
    tNavBar,
    tTaskAdd,
  },
  computed: {
    ...mapGetters(['GET_INFO_USER', 'GET_ALL_TASKS']),
  },
  methods: {
    ...mapActions(['FETCH_INFO_USER', 'FETCH_TASKS', 'REMOVE_TASK']),
    async showAddTaskFunc() {
      await this.FETCH_TASKS();
      const info = this.GET_ALL_TASKS;
      if (info.length) {
        this.showAddTask = !this.showAddTask;
      }
    },
    removeTask(id) {
      console.log(id);
      this.REMOVE_TASK(id);
    },
  },
  async mounted() {
    if (!Object.keys(this.GET_INFO_USER).length) {
      await this.$store.dispatch('FETCH_INFO_USER');
    }
    if (!this.tasks.length) {
      await this.FETCH_TASKS();
      this.tasks = this.GET_ALL_TASKS;
    }
  },

};
</script>

<style lang="scss">

</style>
