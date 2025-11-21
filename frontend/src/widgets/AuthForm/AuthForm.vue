<script setup lang="ts">
defineProps<{
  title: string;
  type: 'auth' | 'register';
}>()
</script>

<template>
  <form class="auth-form">
    <h2 class="auth-form__title">{{ title }}</h2>

    <div class="auth-form__fields">
      <slot name="fields" />
    </div>

    <button
        v-if="type === 'register'"
        type="submit"
        class="auth-form__button"
    >
      Create Account
    </button>

    <button
        v-if="type === 'auth'"
        type="submit"
        class="auth-form__button"
    >
      Sing In
    </button>

    <div class="auth-form__links">
      <slot name="links" />
    </div>

  </form>
</template>

<style scoped lang="scss">
.auth-form {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  margin: 200px auto;
  border: 1px solid var(--gray-color);
  border-radius: var(--border-radius-small);
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 20px;
    color: var(--orange-color);
    text-align: center;
  }

  &__fields {
    padding: 10px 0 0 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }

  &__button {
    background-color: var(--orange-color);
    color: var(--write-color);
    font-family: "Tomorrow";
    font-size: 14px;
    border-radius: var(--border-radius-small);
    padding: 10px 12px;
    margin: 20px auto 0;

    &:hover {
      transition: all .3s;
      background-color: var(--dark-orange-color);
    }
  }

  &__links {
    padding: 20px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  :deep(.auth-form__input) {
    font-family: "Tomorrow";
    border-bottom: 1px solid var(--gray-color);
    padding: 10px 3px;

    &::placeholder {
      font-size: 14px;
    }

    &:focus {
      border-bottom: 1px solid var(--orange-color);
    }
  }

  :deep(.auth-form__link) {
    font-size: 14px;
    cursor: pointer;
    text-align: center;
    color: var(--orange-color);

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>