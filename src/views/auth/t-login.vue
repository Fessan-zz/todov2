<template>
  <div class="t-login">
      <div class="container">
    <form class="login m-auto" @submit.prevent="submitLogin">
      <div
        class="login-wrap d-flex justify-content-center align-items-center flex-column form-group"
      >
        <h1 class="">Вход</h1>
        <div class="login-line mb-3"></div>
                            <!-- email -->
        <div
          class="form-group"
          :class="{ 'errorInput': ($v.email.$dirty && $v.email.$error)}"
        >
          <input
            type="email"
            class="form-control form-input  email-input mt-3 p-3"
            v-model.trim="$v.email.$model"
          />
          <div class="error" v-if="!$v.email.required">Поле обязательно для заполнения</div>
          <div class="error" v-if="!$v.email.email">Введите действительный email</div>
        </div>
                          <!-- password -->
        <div
          class="form-group"
          :class="{ 'errorInput': ($v.password.$dirty && $v.password.$error)}"
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

        <button type="submit" class="btn btn-success mb-5">ВОЙТИ</button>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
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
  },
  methods: {
    submitLogin() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      console.log('submit on login', formData);
      this.$router.push('/taskList');
    },
  },
};
</script>

<style lang="scss">

</style>
