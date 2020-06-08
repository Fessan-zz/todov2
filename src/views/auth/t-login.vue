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
          type="email"
          placeholder="email"
          class="form-control form-input login-input mt-3 p-3"
          v-model="email"
         >
           <span >Err </span>
        <input
          type="password"
          placeholder="Введите пароль"
          class="form-control form-input  email-input mt-3 mb-5 p-3"
          v-model="password"
        >
         <span >Err </span>
        <button type="submit" class="btn btn-success mb-5">ВОЙТИ</button>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
import {} from 'vuelidate/lib/validators';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submitLogin() {
      console.log('submit on login');
    },
  },
  validations: {
    email: {},
    password: {},
  },
};
</script>

<style lang="scss">

</style>
