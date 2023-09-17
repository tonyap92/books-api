<script setup>
import { useBookStore } from "../stores/index.js";
const bookStore = useBookStore();
</script>

<template>
  <section class="books">
    <p class="books__text">Found {{ bookStore.filteredBooksCount }} results</p>

    <div class="books__coll" v-if="!bookStore.isLoading">
      <TransitionGroup name="list">
        <BookCard
          v-for="book in bookStore.sortedBooks"
          :key="book.id"
          :book="book"
          v-if="bookStore.books.length > 0"
        />
      </TransitionGroup>
    </div>

    <div class="books__loading" v-else>
      <p>Loading Books...</p>
    </div>

    <LoadMoreButton />
  </section>
</template>

<style scoped>
.books {
  padding: 14px;
}

.books__text {
  margin: 0 0 40px;
  color: #000000;

  font-size: 19px;
  font-weight: 400;

  text-align: center;
}
.books__coll {
  max-width: 100%;
  width: 100%;
  margin: 0 auto 40px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px 40px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

@media (max-width: 1169.98px) {
  .books__coll {
    grid-gap: 20px 30px;
  }
}

@media (max-width: 991.98px) {
  .books__coll {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 767.98px) {
  .books__coll {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 575.98px) {
  .books__coll {
    grid-template-columns: 100%;
  }
}
</style>
