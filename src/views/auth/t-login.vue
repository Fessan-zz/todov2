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
            type="text"
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

        <button
          type="submit"
          class="btn btn-success mb-5"
        >
          ВОЙТИ
        </button>
         <p
            class="typo__p"
            v-if="submitStatus === 'OK'"
          >
            Thanks for your submission!
          </p>
          <p
            class="typo__p"
            v-if="submitStatus === 'ERROR'"
          >
            Please fill the form correctly.
          </p>
          <p
            class="typo__p"
            v-if="errorInfo.length"
          >
            {{errorInfo}}
          </p>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
import { mapGetters } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      submitStatus: null,
      errorInfo: '',
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
    async submitLogin() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        this.submitStatus = 'PENDING';
        try {
          await this.$store.dispatch('LOGIN', formData);
          this.$router.push('/taskList');
        } catch (e) {
          console.log(e, 'ошибка из catch submitLogin');
        }
      }
    },
  },
  computed: {
    ...mapGetters(['GET_ERROR']),
    error() {
      return this.GET_ERROR;
    },
  },
  watch: {
    error(fbError) {
      if (fbError.code === 'auth/user-not-found') {
        this.errorInfo = 'Нет такого пользователя';
      }
      if (fbError.code === 'auth/wrong-password') {
        this.errorInfo = 'Не правильный пароль';
      }
    },
  },
};
</script>

<style lang="scss">
.t-login {
  padding-top: 25vh;
}
</style>
