<script setup>
import { useBookStore } from "../stores/index.js";
const bookStore = useBookStore();

onMounted(() => {
  bookStore.fetchBook();
});
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <HeaderNav />
      <slot />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 1920px;
  min-width: 320px;
  width: 100%;
  margin: 0 auto;

  font-family: "Rubik", sans-serif;
  color: #000000;

  background-color: #ffffff;
  box-sizing: border-box;
  overflow: hidden;
}

.container {
  max-width: 1334px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

@media (max-width: 1199.98px) {
  .container {
    max-width: 1170px;
  }
}

@media (max-width: 991.98px) {
  .container {
    max-width: 768px;
  }
}
@media (max-width: 767.98px) {
  .container {
    max-width: 576px;
  }
}
@media (max-width: 575.98px) {
  .container {
    max-width: 415px;
  }
}
@media (max-width: 414.98px) {
  .container {
    max-width: 100%;
  }
}
</style>
