<template>
  <div class="t-main-wrapper">
    <t-nav-bar/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import tNavBar from '../components/layouts/t-nav-bar.vue';

export default {
  name: 't-main-wrapper',
  components: {
    tNavBar,
  },
};
</script>

<style lang="scss" >

</style>
