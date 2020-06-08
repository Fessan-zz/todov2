<template>
  <div class="t-register">
    <div class="container container_p">
    <form class="login m-auto">
      <div class="login-wrap d-flex justify-content-center align-items-center
      flex-column form-group">
        <h1 class="">Регистрация</h1>

        <!--                email                -->
         <div
          class="form-item"
          :class="{ 't-register--error': $v.email.$error }"
          >
            <input
            type="email"
            placeholder="email"
            class="form-control form-input login-input mt-3 p-3"
            v-model="email"
            @change="$v.email.touch()"
         >
         </div>
          <div class="error" v-if="!$v.email.required">Поле обязательно для заполнения</div>
          <div class="error" v-if="!$v.email.email">Введите действительный email</div>

          <!--             password      -->
        <input
          type="password"
          placeholder="Введите пароль"
          class="form-control form-input  email-input mt-3 p-3"
          v-model="password"
         >
         <span >Err</span>
         <input
          type="password"
          placeholder="Повторите пароль"
          class="form-control form-input  email-input mt-3 mb-5 p-3"
          v-model="repeatPassword"
         >
         <span >Err  </span>
         <span class="mb-2" >Уже есть аккаунт? <router-link to="/login">Войти</router-link> </span>
        <button type="submit" class="btn btn-success mb-5">ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </div>
    </form>
  </div>
  </div>
</template>

<script>

import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'register',
  data() {
    return {
      email: '',
      password: '',
      repeatPassword: '',
    };
  },
  validations: {
    email: {
      required,
      email,
    },
  },
};
</script>

<style lang="scss">
.t-register--error{
  background-color: red;
}
</style>
