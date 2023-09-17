<script setup>
import { useBookStore } from "../stores/index.js";
import { ref } from "vue";

const bookStore = useBookStore();
const selectedCategory = ref("");

async function selectCategory(category) {
  await bookStore.setShow(category);
}
</script>

<template>
  <span class="header__select-text">Categories</span>
  <select
    class="header__select-filter"
    v-model="selectedCategory"
    @change="selectCategory(selectedCategory)"
  >
    <option value="">all</option>
    <option value="art">art</option>
    <option value="biography">biography</option>
    <option value="computers">computers</option>
    <option value="history">history</option>
    <option value="medical">medical</option>
    <option value="poetry">poetry</option>
  </select>
</template>

<style scoped>
.header__select-text {
  color: #b0b7c6;

  font-size: 20px;
  font-weight: 400;
}

.header__select-filter {
  height: 39px;
  max-width: 100%;
  padding: 5px 9px;

  font-size: 20px;
  border: none;
  outline: 2px solid transparent;
  outline-offset: 2px;

  cursor: pointer;
}
</style>
