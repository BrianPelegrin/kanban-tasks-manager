<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue";
import TaskBoard from "./components/TaskBoard.vue";
</script>

<template>
  <header>
    <the-navbar />
  </header>
  <main>
    <task-board />
  </main>
  <footer></footer>
</template>

<style>
:root {
  --light: #f9f9f9;
  --white: #ffffff;
  --primary: #009ef7;
  --secondary: #e1e3ea;
  --success: #50cd89;
  --info: #7239ea;
  --warning: #ffc700;
  --danger: #f1416c;
  --dark: #181c32;
  --gray-100: #f9f9f9;
  --gray-200: #f4f4f4;
  --gray-300: #e1e3ea;
  --gray-400: #b5b5c3;
  --gray-500: #a1a5b7;
  --gray-600: #7e8299;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #d63384;
  --shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  --border: 1px solid rgba(60, 60, 67, 0.12);
}
html {
  font-size: 62.5%;
}
*::after,
*::before {
  box-sizing: inherit;
}
body {
  font-size: 1.6rem;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
  background-color: var(--gray-200);
}

main {
  padding: 5rem;
}
.container {
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
}

input {
  height: 3rem;
  padding: 0.3rem;
}

.btn {
  cursor: pointer;
  border: var(--border);
  border-radius: 0.2rem;
  padding: 0.5rem;
}

.btn-primary {
  background-color: var(--primary);
  color: var(--white);
}
.btn-secondary {
  background-color: var(--secondary);
}
.btn-danger {
  background-color: var(--danger);
  color: var(--white);
}

.btn-indigo {
  background-color: var(--indigo);
  color: var(--white);
}
.btn-warning {
  background-color: var(--warning);
}
.btn-success {
  background-color: var(--success);
  color: var(--white);
}

.form-input {
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;
  appearance: none;
  border: var(--border);
  border-radius: 0.5rem;
  font-family: sans-serif;
}

input[type="color"] {
  padding: 0 !important;
  appearance: none;
  background-color: transparent;
  height: 3.8rem;
}
</style>
