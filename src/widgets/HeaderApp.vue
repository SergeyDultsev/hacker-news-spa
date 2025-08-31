<script setup lang="ts">
import { useToRoute } from "@/shared/lib/useToRoute";
import { PhChartLineUp, PhQuestion, PhBag } from "@phosphor-icons/vue";
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
        <li class="nav-item" @click="useToRoute('/')">
          <PhChartLineUp :size="20" /> Best
        </li>
        <li class="nav-item" @click="useToRoute('/asks')">
          <PhQuestion :size="20" /> Asks
        </li>
        <li class="nav-item" @click="useToRoute('/job')">
          <PhBag :size="20" /> Job
        </li>
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
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--orange-color);
  font-size: 16px;
  font-weight: 500;
  padding: 8px 10px;
  border: 1px solid var(--orange-color);
  border-radius: var(--border-radius-small);
  transition: all .3s ease-in;

  &:hover {
    cursor: pointer;
    color: var(--write-color);
    background-color: var(--orange-color);
    transition: all .3s ease-in;
  }
}

</style>