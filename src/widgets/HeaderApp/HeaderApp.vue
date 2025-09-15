<script setup lang="ts">
import {ref, watch} from "vue";
import { useRoute } from "vue-router";
import { toRoute } from "@/shared/utils/toRoute";
import { NavLinks } from "@/widgets/HeaderApp/NavLinks";

const route = useRoute();
const linkIsActive = ref<string>(route.path);

watch(() => route.path, (newPath) => linkIsActive.value = newPath);
</script>

<template>
  <header class="header">
    <nav class="navbar">

      <img
          class="logo"
          @click="toRoute('/')"
          src="@/assets/img/hacker-news-icon.png"
          alt="logo"
      />

      <ul class="nav-list">
        <li
            v-for="link in NavLinks" :key="link.path"
            :class="{
              'nav-item': linkIsActive !== link.path,
              'nav-item__active': linkIsActive === link.path
            }"
            @click="toRoute(`${ link.path }`)"
        >
          <component :is="link.iconComponent" :size="link.iconSize" />
          <p class="nav-item__name">{{ link.name }}</p>
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
  z-index: 999;
  width: 100%;
  height: 60px;
  background-color: var(--white-color-blur);
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

.nav-item__active {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--write-color);
  font-size: 16px;
  font-weight: 500;
  padding: 8px 10px;
  border-radius: var(--border-radius-small);
  background: var(--orange-color);
  transition: all .3s ease-in;
}

.nav-item__name {
  font-size: 16px;
  font-weight: 500;
}

@media screen and (max-width: 500px) {
  .header {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: var(--write-color);
    border-bottom: none;
    border-top: 1px solid var(--gray-color);
    padding: 10px;
  }

  .logo {
    display: none;
  }

  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-list {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--orange-color);
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

  .nav-item__name {
    display: none;
  }

  .nav-item__active {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--write-color);
    font-size: 16px;
    font-weight: 500;
    padding: 8px 10px;
    border-radius: var(--border-radius-small);
    background: var(--orange-color);
    transition: all .3s ease-in;
  }
}
</style>