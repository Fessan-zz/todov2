<template>
  <div class="t-nav-bar">
    <div class="container">
      <nav class="navbar d-flex justify-content-end">
      <a href="/login.html" class="login_a ml-5">{{GET_INFO_USER.email}}</a>
      <a href="/" class="logout ml-5">Выйти</a>
      <a href="/">
        <img
        src="@/assets/img/logout.png"
        alt="logout"
        class="ml-5"
        @click="logout"
      ></a>
    </nav>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  name: 't-nav-bar',
  methods: {
    ...mapActions(['LOGOUT']),
    ...mapMutations(['CLEAR_INFO_USER']),
    logout() {
      this.LOGOUT();
      this.CLEAR_INFO_USER();
      this.$router.push('/?message=logout');
    },
  },
  computed: {
    ...mapGetters(['GET_INFO_USER']),
  },
};
</script>

<style lang="scss" >

</style>
