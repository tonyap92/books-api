<script setup>
import { useBookStore } from "../stores/index.js";
import { ref } from "vue";

const bookStore = useBookStore();
const selectedSort = ref("relevance");

async function selectSort(sort) {
  await bookStore.setSort(sort);
}
</script>

<template>
  <span class="header__select-text">Sorting by</span>

  <select
    class="header__select-sort"
    v-model="selectedSort"
    @change="selectSort(selectedSort)"
  >
    <option value="relevance">relevance</option>
    <option value="newest">newest</option>
  </select>
</template>

<style scoped>
.header__select-text {
  color: #b0b7c6;

  font-size: 20px;
  font-weight: 400;
}

.header__select-sort {
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
