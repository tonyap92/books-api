<script setup>
import { useBookStore } from "@/stores/index.js";
const bookStore = useBookStore();
const router = useRouter();

const { book } = defineProps({
  book: {
    type: Object,
    required: true,
  },
});

const getAuthors = (authors) => {
  if (Array.isArray(authors)) {
    return authors.join(", ");
  }
  return authors;
};
const getCategories = (categories) => {
  if (Array.isArray(categories)) {
    return categories.join(", ");
  }
  return categories;
};

const bookItemImage = book.volumeInfo?.imageLinks?.thumbnail;
const bookItemCategory = getCategories(book.volumeInfo?.categories);
const bookItemTitle = book.volumeInfo?.title;
const bookItemAuthor = getAuthors(book.volumeInfo?.authors);
</script>

<template>
  <div class="books__item-info">
    <NuxtLink :to="'/book/' + book.id">
      <img :src="bookItemImage" class="books__item-image" />
    </NuxtLink>
    <div class="books__item-desc">
      <div class="books__item-category">
        {{ bookItemCategory }}
      </div>
      <div class="books__item-title">{{ bookItemTitle }}</div>
      <div class="books__item-author">
        {{ bookItemAuthor }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.books__item-info {
  text-align: center;
}
.books__item-image {
  width: 146px;
  height: 208px;

  margin-bottom: 38px;

  box-shadow: 5px 5px 10px #ccc;
  cursor: pointer;
}

.books__item-desc {
  text-align: left;
}

.books__item-category,
.books__item-author {
  color: darkgray;
  font-size: 16px;
  font-weight: 400;
}
.books__item-category {
  margin-bottom: 18px;
  text-decoration: underline;
}

.books__item-title {
  margin-bottom: 3px;
  color: #000000;
  font-size: 18px;
  font-weight: 400;
}
</style>
