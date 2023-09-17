import { defineStore } from "pinia";

export const useBookStore = defineStore("books-store", {
  state: () => {
    return {
      book: {},
      books: [],
      loading: false,
      searchTerm: "art",
      show: "",
      selectedSort: "relevance",
      startIndex: 0,
      totalItems: 0,
    };
  },

  getters: {
    isLoading() {
      return this.loading;
    },

    sortedBooks() {
      let books = this.books;

      if (!books) return [];

      if (this.show) {
        books = books.filter((book) => {
          if (book.volumeInfo.categories) {
            return book.volumeInfo.categories
              .map((category) => category.toLowerCase())
              .includes(this.show.toLowerCase());
          }
          return false;
        });
      }

      if (this.selectedSort === "newest") {
        books.sort(
          (a, b) =>
            new Date(b.volumeInfo.publishedDate) -
            new Date(a.volumeInfo.publishedDate)
        );
      } else if (this.selectedSort === "relevance") {
        books.sort(
          (a, b) =>
            new Date(a.volumeInfo.publishedDate) -
            new Date(b.volumeInfo.publishedDate)
        );
      }

      return books;
    },

    filteredBooksCount() {
      return this.show ? this.sortedBooks.length : this.totalItems;
    },
  },

  actions: {
    async fetchBook() {
      this.loading = true;
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${this.searchTerm}&orderBy=${this.selectedSort}&startIndex=${this.startIndex}&maxResults=8&key=${useRuntimeConfig().public.YOUR_API_KEY}`
        );
        const data = await response.json();
        this.books = data.items;
        this.totalItems = data.totalItems;
      } catch (error) {
        this.books = [];
        alert("Error loading new books");
      }
      this.loading = false;
    },

    async fetchBookById(id) {
      this.loading = true;
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}?key=${useRuntimeConfig().public.YOUR_API_KEY}`
        );
        const data = await response.json();
        console.log("> fetchBookById: data", data);
        this.book = {
          id: data.id,
          title: data.volumeInfo?.title || "",
          image: data.volumeInfo?.imageLinks?.thumbnail || "",
          description: data.volumeInfo?.description || "",
          author: data.volumeInfo?.authors?.[0] || "",
          categories: data.volumeInfo?.categories?.[0],
        };
        console.log("> fetchBookById:book", this.book);
      } catch (error) {
        alert("Error loading book");
      }
      this.loading = false;
    },

    async setShow(show) {
      this.show = show;
    },

    async setSort(sort) {
      this.selectedSort = sort;
    },

    async loadMoreBooks() {
      this.startIndex += 8;
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${this.searchTerm}&orderBy=${this.selectedSort}&startIndex=${this.startIndex}&maxResults=8&key=${useRuntimeConfig().public.YOUR_API_KEY}`
        );
        const data = await response.json();
        this.books.push(...data.items);
        this.totalItems = data.totalItems;
      } catch (error) {
        alert("Error loading new books");
      }
    },
  },
});
