<script setup lang="ts">
import { AuthForm } from "@/widgets";
import router from "@app/router";
</script>

<template>
  <AuthForm title="Authorization" type="auth">
    <template #fields>
      <input class="auth-form__input" type="text" placeholder="Email" />
      <input class="auth-form__input" type="text" placeholder="Password" />
    </template>
    
    <template #links>
      <p class="auth-form__link" @click="router.push('/register')">Register</p>
      <p class="auth-form__link" @click="router.push('/')">To Main</p>
    </template>
  </AuthForm>
</template>

<style scoped lang="scss">
.auth-form__link {
  font-size: 14px;
  cursor: pointer;
  text-align: center;
}
</style>