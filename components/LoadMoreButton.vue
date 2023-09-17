<script setup>
import { useBookStore } from "../stores/index.js";
const bookStore = useBookStore();

const loadMore = () => {
  bookStore.loadMoreBooks();
};

</script>

<template>
  <button
    v-if="bookStore.books.length < bookStore.totalItems && bookStore.filteredBooksCount >= 8"
    @click="loadMore()"
    class="books__btn"
  >
    Load more
  </button>
</template>

<style scoped>
.books__btn {
  height: 39px;
  max-width: 231px;
  width: 100%;
  margin: 0 auto;

  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  border: 1px solid #000000;
  cursor: pointer;
}

.books__btn:hover {
  color: #ffffff;

  background-color: #000000;
}
</style>
