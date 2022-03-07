<template>
  <div class="box column is-4 is-offset-4 box-login">
    <div class="columns">
      <div class="column has-text-centered">
        <img src="@/static/logo.png" />
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-left">
        <input class="input" type="text" placeholder="email" />
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-left">
        <input class="input" type="text" placeholder="contraseña" />
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-centered">
        <nuxt-link to="/" class="button is-danger">Cancelar</nuxt-link>
        <nuxt-link to="/admin" class="button is-primary">Login</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login'
}
</script>

<style>
.box-login {
  margin-top: 30px;
}
</style>