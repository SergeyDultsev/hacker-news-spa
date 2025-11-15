<script setup lang="ts">
import { toRoute } from "@shared/utils/toRoute";
</script>

<template>
  <form class="auth-form">
    <h2 class="auth-form__title">Authorization</h2>
    <div class="auth-form__fields">
      <input class="auth-form__input" type="text" placeholder="Email" />
      <input class="auth-form__input" type="text" placeholder="Password" />
    </div>
    <div class="auth-form__links">
      <p class="auth-form__link" @click="toRoute('/register')">Register</p>
      <p class="auth-form__link" @click="toRoute('/')">To Main</p>
    </div>
  </form>
</template>

<style scoped lang="scss">
@use './style';
</style>