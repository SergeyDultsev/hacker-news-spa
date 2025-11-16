<script setup lang="ts">
import { AuthForm } from "@/widgets";
import { toRoute } from "@shared/utils/toRoute";
</script>

<template>
  <AuthForm title="Authorization" type="auth">
    <template #fields>
      <input class="auth-form__input" type="text" placeholder="Email" />
      <input class="auth-form__input" type="text" placeholder="Password" />
    </template>
    
    <template #links>
      <p class="auth-form__link" @click="toRoute('/register')">Register</p>
      <p class="auth-form__link" @click="toRoute('/')">To Main</p>
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