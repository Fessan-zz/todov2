<template>
  <div class="t-nav-bar">
    <div class="container">
      <nav class="navbar d-flex justify-content-end">
      <a href="/login.html" class="login_a ml-5">Логин пользователя</a>
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
import { mapActions } from 'vuex';

export default {
  name: 't-nav-bar',
  methods: {
    ...mapActions(['LOGOUT']),
    logout() {
      this.LOGOUT();
      this.$router.push('/?message=logout');
    },
  },
};
</script>

<style lang="scss" >

</style>
