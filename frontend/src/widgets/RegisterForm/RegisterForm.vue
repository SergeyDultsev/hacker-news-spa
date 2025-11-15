<script setup lang="ts">
import { toRoute } from "@shared/utils/toRoute";
</script>

<template>
  <form class="register-form">
    <h2 class="register-form__title">Register</h2>
    <div class="register-form__fields">
      <input class="register-form__input" type="text" placeholder="Name" />
      <input class="register-form__input" type="text" placeholder="Email" />
      <input class="register-form__input" type="text" placeholder="Password" />
      <input class="register-form__input" type="text" placeholder="Required Password" />
    </div>
    <div class="register-form__links">
      <p class="register-form__link" @click="toRoute('/auth')">Authorization</p>
      <p class="register-form__link" @click="toRoute('/')">To Main</p>
    </div>
  </form>
</template>

<style scoped lang="scss">
@use './style';
</style>