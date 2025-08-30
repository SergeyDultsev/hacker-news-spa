<script setup lang="ts">
import { useToRoute } from "@/shared/lib/useToRoute";
</script>

<template>
  <header class="header">
    <nav class="navbar">

      <img
          class="logo"
          @click="useToRoute('/')"
          src="@/assets/img/hacker-news-icon.png"
          alt="logo"
      />

      <ul class="nav-list">
        <li class="nav-item" @click="useToRoute('/')">Best</li>
        <li class="nav-item" @click="useToRoute('/asks')">Asks</li>
        <li class="nav-item" @click="useToRoute('/job')">Job</li>
      </ul>

    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
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