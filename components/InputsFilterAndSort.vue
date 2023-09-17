<script setup></script>

<template>
  <div class="header__filter-sort">
    <SelectFilter />
    <SelectSort />
  </div>
</template>

<style scoped>
.header__filter-sort {
  display: grid;
  grid-template-columns: 16% 33% 18% 33%;
  align-items: center;
}
@media (max-width: 767.98px) {
  .header__filter-sort {
    display: grid;
    grid-template-columns: repeat(2, 45%);
    row-gap: 20px;
    align-items: center;
  }
}
</style>
