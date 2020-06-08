<template>
  <div class="t-login">
      <div class="container">
    <form class="login m-auto" @submit.prevent="submitLogin">
      <div
        class="login-wrap d-flex justify-content-center align-items-center flex-column form-group"
      >
        <h1 class="">Вход</h1>
        <div class="login-line mb-3"></div>
        <input
          required type="email"
          placeholder="email"
          class="form-control form-input login-input mt-3 p-3"
          v-model="email"
         >
           <span >Err
           </span>
        <input
          required type="password"
          placeholder="Введите пароль"
          class="form-control form-input  email-input mt-3 mb-5 p-3"
          v-model="password"
        >
         <span >Err
           </span>
        <button type="submit" class="btn btn-success mb-5">ВОЙТИ</button>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  name: 't-login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submitLogin() {
    },
  },
};
</script>

<style lang="scss">

</style>
