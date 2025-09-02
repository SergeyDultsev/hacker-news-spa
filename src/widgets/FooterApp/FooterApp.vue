<script setup lang="ts">
import { AUTHOR, CONTACT_AUTHOR } from "@/app/config/author";
</script>

<template>
  <footer class="footer">
    <p class="author">{{ AUTHOR }}</p>
    <ul class="contact-author_list">
      <li
          class="contact-author__item"
          v-for="contact in CONTACT_AUTHOR" :key="contact.link"
      >
        {{ contact.title }}
      </li>
    </ul>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.author {
  color: var(--orange-color);
  font-size: 14px;
  font-weight: 700;
}

.contact-author_list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-author__item {
  color: var(--black-color);
  font-size: 12px;
  font-weight: 400;
  transition: all .3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: var(--orange-color);
    transition: all .3s ease-in-out;
  }
}
</style>