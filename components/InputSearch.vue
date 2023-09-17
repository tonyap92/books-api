<script setup>
import { useBookStore } from "@/stores/index.js";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();
const bookStore = useBookStore();

const { searchTerm } = storeToRefs(bookStore);

const searchBooks = () => {
  bookStore.startIndex = 0; // сбрасываем startIndex при новом поиске
  bookStore.searchTerm = searchTerm.value;
  bookStore.fetchBook();
  router.push({ path: "/", query: { search: searchTerm.value } });
};

console.log(searchBooks);
</script>

<template>
  <div class="header__search">
    <form @submit.prevent="searchBooks">
      <input
        v-model="searchTerm"
        class="header__input"
        type="text"
        name="search"
        id="search"
        placeholder="js"
      />
      <button class="header__button">
        <img
          class="header__button-icon"
          src="https://i.ibb.co/dkzhNpJ/search.png"
          alt="search"
          type="submit"
        />
      </button>
    </form>
  </div>
</template>

<style scoped>
.header__search {
  height: 42px;
  max-width: 620px;
  width: 89%;
  margin: 0 auto 24px;
  padding: 6px;

  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;

  color: #2d3b87;

  background: #ffffff;

  box-sizing: border-box;
}

form {
  height: 30px;
  display: grid;
  grid-template-columns: 92% 6%;
  column-gap: 10px;
  justify-self: flex-end;
}

.header__input {
  max-width: 100%;
  width: 100%;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;

  color: #000000;

  outline: 2px solid transparent;
  outline-offset: 2px;
  border: none;
}

input {
  padding: 0;
  margin: 0;
}

.header__button {
  height: 30px;
  margin: 0;
  padding: 0;
  background: none;
  border: none;

  justify-self: end;

  cursor: pointer;
}

@media (max-width: 579.98px) {
  .header__search {
    justify-self: center;
  }
}
</style>
