<script setup lang="ts">
import { footerLinks } from "@/widgets/FooterApp/FooterLinks";
</script>

<template>
  <footer class="footer">
    <ul class="links__list">
      <li
          class="links__item"
          v-for="item in footerLinks" :key="item.link"
      >
        <a
            class="links__item__link"
            :href="item.link"
            target="_blank"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
}

.links__list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.links__item {
  color: var(--black-color);
  font-size: 14px;
  font-weight: 500;
  transition: all .3s ease-in-out;
  text-align: right;

  &:hover {
    cursor: pointer;
    color: var(--orange-color);
    transition: all .3s ease-in-out;
  }

  &:visited {
    color: var(--orange-color);
  }
}

.links__item__link {
  color: var(--black-color);
}

@media screen and (max-width: 500px) {
  .footer {
    display: none;
  }
}
</style>