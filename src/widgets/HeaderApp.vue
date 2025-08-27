<script setup lang="ts">
import router from "@/app/router";

const toHome = () => router.push('/');
</script>

<template>
  <header class="header">
    <nav class="navbar">

      <img
          class="logo"
          @click="toHome()"
          src="@/assets/img/hacker-news-icon.png"
          alt="logo"
      />

      <ul class="nav-list">
        <li class="nav-item">Best</li>
        <li class="nav-item">Asks</li>
        <li class="nav-item">Job</li>
      </ul>

    </nav>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: var(--write-color);
  border-bottom: 1px solid var(--gray-color);
  padding: 10px;
}

.logo {
  cursor: pointer;
  width: 40px;
  height: 40px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-list {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}

.nav-item {
  color: var(--write-color);
  font-size: 16px;
  font-weight: bold;
  background-color: var(--orange-color);
  padding: 8px 10px;
  border-radius: var(--border-radius-small);
  transition: all .3s ease-in;

  &:hover {
    cursor: pointer;
    color: var(--write-color);
    background-color: var(--dark-orange-color);
    transition: all .3s ease-in;
  }
}

</style>