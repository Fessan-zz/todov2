<template>
  <div class="t-register">
    <div class="container container_p">
    <form class="login m-auto">
      <div class="login-wrap d-flex justify-content-center align-items-center
      flex-column form-group">
        <h1 class="">Регистрация</h1>

        <!--                email                -->
        <div
          class="form-group"
          :class="{ 'errorInput': $v.email.$error }"
        >
          <input
            type="email"
            class="form-control form-input  email-input mt-3 p-3"
            v-model.trim="$v.email.$model"
          />
          <div class="error" v-if="!$v.email.required">Поле обязательно для заполнения</div>
          <div class="error" v-if="!$v.email.email">Введите действительный email</div>
        </div>

          <!--             password      -->
        <div
          class="form-group"
          :class="{ 'errorInput': $v.password.$error }"
        >
          <input
            type="password"
            class="form-control form-input  email-input mt-3 p-3"
            v-model.trim="$v.password.$model"
          />
          <div class="error" v-if="!$v.password.required">Поле обязательно для заполнения</div>
          <div class="error" v-if="!$v.password.minLength">
            Пароль не меньше{{ $v.password.$params.minLength.min }} символов
          </div>
        </div>

            <!--          repeatPassword -->
         <div
          class="form-group"
          :class="{ 'errorInput': $v.repeatPassword.$error }"
        >
          <input
            type="password"
            class="form-control form-input  email-input mt-3 p-3"
            v-model.trim="$v.repeatPassword.$model"
          />
          <div class="error" v-if="!$v.repeatPassword.sameAsPassword">
            Пароли не совпадают.
          </div>
        </div>
         <span class="mb-2" >Уже есть аккаунт? <router-link to="/login">Войти</router-link> </span>
        <button type="submit" class="btn btn-success mb-5">ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </div>
    </form>
  </div>
  </div>
</template>

<script>

import {
  required, email, minLength, sameAs,
} from 'vuelidate/lib/validators';

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
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      sameAsPassword: sameAs('password'),
    },
  },
};
</script>

<style lang="scss">
.form-group .error {
  display: none;
}
.form-group  .errorInput {
  .error {
    display: block;
  }
}
.t-register--error{
  border-color: red;
}
</style>
