<script setup>
import { useBookStore } from "@/stores/index.js";
import { useRoute } from "vue-router";

const bookStore = useBookStore();
const route = useRoute();

const bookId = route.params.id;

if (!bookStore.book || bookStore.book.id !== bookId) {
  try {
    await bookStore.fetchBookById(bookId);
  } catch (error) {
    console.error(error);
    alert("Error loading book details");
  }
}

const bookIdTitle = bookStore.book?.title;
const bookIdDescription = bookStore.book?.description;
const bookIdCategory = bookStore.book?.categories;
const bookIdAuthor = bookStore.book?.author;
const bookIdImage = bookStore.book?.image;
</script>

<template>
  <div class="book">
    <div class="book__coll">
      <div class="book__item">
        <img :src="bookIdImage" class="book__item-image" />
      </div>
      <div class="book__item">
        <div class="book__item-category">{{ bookIdCategory }}</div>
        <div class="book__item-info">{{ bookIdAuthor }} {{ bookIdTitle }}</div>
        <div class="book__item-description" v-html="bookIdDescription"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.book__coll {
  display: grid;
  grid-template-columns: repeat(2, 50%);
}

.book__item:nth-of-type(1) {
  display: grid;
  grid-template-columns: 100%;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}
.book__item-image {
  max-width: 322px;
  width: 100%;
  margin: 0 auto;

  box-shadow: 5px 5px 10px #ccc;
}

.book__item:nth-of-type(2) {
  padding: 50px;
  background-color: #ffffff;
}

.book__item-category {
  margin-bottom: 20px;

  font-size: 18px;

  color: darkgray;
}

.book__item-info {
  margin-bottom: 38px;
  font-size: 28px;
  line-height: 1.1;
}

.book__item-description {
  padding: 20px;

  font-size: 20px;
  line-height: 1.6;

  border: 1px solid #ccc;
}

@media (max-width: 1170.98px) {
  .book__coll {
    display: grid;
    grid-template-columns: 100%;
  }

  .book__item:nth-of-type(1) {
    padding: 50px;
  }
}

@media (max-width: 575.98px) {
  .book__item:nth-of-type(1) {
    padding: 20px;
  }

  .book__item:nth-of-type(2) {
    padding: 20px;
  }
}
</style>
