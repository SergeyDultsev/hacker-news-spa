<script setup lang="ts">

</script>

<template>
  <section class="filter-bar">

    <section class="filter-bar__block">
      <h3 class="filter-bar__title">Filtration</h3>

      <section class="filter-bar__list">
        <div class="filter-bar__item">
          All
        </div>
        <div class="filter-bar__item">
          Best
        </div>
        <div class="filter-bar__item">
          New
        </div>
      </section>

    </section>

    <section class="filter-bar__block">
      <h3 class="filter-bar__title">Sorting</h3>

      <section class="filter-bar__list">
        <div class="filter-bar__item">
          More comments first
        </div>
        <div class="filter-bar__item">
          New ones first
        </div>
      </section>

    </section>

  </section>
</template>

<style scoped>
.filter-bar {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.filter-bar__block {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.filter-bar__title {
  font-size: 16px;
  font-weight: 400;
  color: var(--orange-color);
}

.filter-bar__list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-bar__item {
  font-size: 14px;
  font-weight: 400;
}

.filter-bar__item:hover {
  cursor: pointer;
  color: var(--orange-color);
}
</style>