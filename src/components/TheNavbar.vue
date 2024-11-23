<script setup lang="ts"></script>
<template>
  <div class="navbar-container">
    <div class="navbar-brand">
      <img src="../assets/vue.svg" />
      <h2>Task Manager</h2>
    </div>
    <!-- <div class="navbar-items">
      <div class="nav-item"><button>BUTTON</button></div>
      <div class="nav-item"><button>BUTTON</button></div>
      <div class="nav-item"><button>BUTTON</button></div>
    </div> -->
  </div>
</template>

<style scoped>
.navbar-container {
  background-color: var(--white);
  height: 4rem;
  box-shadow: var(--shadow);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.navbar-brand {
  display: flex;
  align-items: center;
}
.navbar-brand h2 {
  margin: 0;
  color: var(--success);
}
.navbar-brand img {
  width: 5rem;
}

.navbar-items {
  justify-content: space-around;
}
</style>
