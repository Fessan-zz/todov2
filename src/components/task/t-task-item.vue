<template>
  <div class="t-task-item">
    <div
      class="tasklist__item d-flex justify-content-between"
    >
      <a href="#">name</a>
      <div>
        <a href="#" class="redact">
          <img src="../../assets/img/pensel.svg" alt="redact"/>
        </a>
        <a href="#" class="deleteTask">
          <img src="../../assets/img/x.svg" alt="delete" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'task-item',
};
</script>

<style lang="scss">

</style>
