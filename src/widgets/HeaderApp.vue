<script setup lang="ts">

</script>

<template>
  <header class="header">
    <nav class="navbar">

      <!-- Logo -->
      <div></div>

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
  background-color: var(--orange-color);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.nav-list {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}

.nav-item {
  color: var(--orange-color);
  background-color: var(--write-color);
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