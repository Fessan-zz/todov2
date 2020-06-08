<template>
  <div class="t-register">
    <div class="container container_p">
    <form class="login m-auto">
      <div class="login-wrap d-flex justify-content-center align-items-center
      flex-column form-group">
        <h1 class="">Регистрация</h1>
        <div class="login-line mb-3"></div>
        <input type="text" placeholder="Логин" class="form-control
         form-input login-input mt-3 p-3"
         >
        <span>Err</span>
        <input type="email" placeholder="email" class="form-control
         form-input login-input mt-3 p-3"
         >
         <span >Err</span>
        <input type="password" placeholder="Введите пароль"
         class="form-control form-input  email-input mt-3 p-3"
         >
         <span >Err</span>
         <input type="password" placeholder="Повторите пароль"
         class="form-control form-input  email-input mt-3 mb-5 p-3"
         >
         <span >Err
         </span>
         <span class="mb-2" >Уже есть аккаунт? <router-link to="/login">Войти</router-link> </span>
        <button type="submit" class="btn btn-success mb-5">ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </div>
    </form>
  </div>
  </div>
</template>

<script>

export default {
  name: 't-register',
};
</script>

<style lang="scss">

</style>
