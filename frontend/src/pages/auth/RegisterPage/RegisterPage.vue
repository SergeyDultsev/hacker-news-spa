<script setup lang="ts">
import { AuthForm } from "@/widgets";
import router from "@app/router";
</script>

<template>
  <AuthForm title="Sign Up" type="register">
    <template #fields>
      <input class="auth-form__input" type="text" placeholder="Name" />
      <input class="auth-form__input" type="text" placeholder="Email" />
      <input class="auth-form__input" type="text" placeholder="Password" />
      <input class="auth-form__input" type="text" placeholder="Required Password" />
    </template>

    <template #links>
      <p class="auth-form__link" @click="router.push('/auth')">Sign In</p>
      <p class="auth-form__link" @click="router.push('/')">To Main</p>
    </template>
  </AuthForm>
</template>

<style scoped lang="scss">
</style>