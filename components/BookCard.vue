<script setup>
const { book } = defineProps(["book"]);
</script>

<template>
  <article class="books__item">
    <ItemInfo :book="book" />
  </article>
</template>

<style scoped>
.books__item {
  min-height: 380px;
  padding: 41px 23px 15px;
  background-color: #f5f5f5;
}
</style>
