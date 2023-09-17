<script setup></script>

<template>
  <header class="header">
    <div class="header__bg">
      <div class="header__info">
        <NuxtLink to="/">
          <h1 class="header__title">Search for books</h1>
        </NuxtLink>
        <InputSearch />
        <InputsFilterAndSort />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header__bg {
  max-width: 100%;
  width: 100%;
  height: 270px;
  height: 350px;
  background-color: #231e24;
}

.header__info {
  min-height: -webkit-fill-available;
  max-width: 700px;
  width: 87%;
  margin: 0 auto;
  padding: 30px 30px 15px;
  text-align: center;

  a {
    text-decoration: none;
  }
}

.header__info a {
  text-decoration: none;
}

h1.header__title {
  margin: 0 0 38px;
  color: #ffffff;

  font-size: 52px;
  font-weight: 300;

  cursor: pointer;
}

@media (max-width: 767.98px) {
  .header__bg {
    height: auto;
  }

  .header__info {
    padding: 20px;
  }
}

@media (max-width: 575.98px) {
  h1.header__title {
    margin: 0 0 20px;

    font-size: 32px;
  }
}
</style>
