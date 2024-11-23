<script setup lang="ts">
import type { IKanbaColumn } from "../../interfaces/index";
import { ref } from "vue";

interface IEmits {
  (event: "sumbit", task: IKanbaColumn): void;
}
const emits = defineEmits<IEmits>();

const task = ref<IKanbaColumn>({
  id: "",
  name: "",
  color: "",
  tasks: [],
});
const errors = ref<string>("");
const validate = () => {
  if (task.value.name == "") {
    errors.value = "NOMBRE INVALIDO";
  }

  if (errors.value != "") {
    setTimeout(() => {
      errors.value = "";
    }, 2000);
    return;
  }

  emits("sumbit", task.value);
};
</script>
<template>
  <div class="form-errors" v-if="errors != ''">{{ errors }}</div>
  <form @submit.prevent="validate" class="kanban-form">
    <div class="input-container">
      <label for="kanban-input-name">Nombre:</label>
      <input
        v-model="task.name"
        id="kanban-input-name"
        type="text"
        class="form-input"
      />
    </div>
    <div class="input-container">
      <label for="kanban-input-color">Color:</label>
      <input
        v-model="task.color"
        id="kanban-input-color"
        type="color"
        class="form-input"
      />
    </div>

    <div class="input-container">
      <button type="submit" class="btn btn-success">Guardar Columna</button>
    </div>
  </form>
</template>

<style scoped>
.kanban-form {
  height: 90%;
  display: grid;
  padding: 1rem 2rem 1rem 1rem;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.input-container {
  padding: 0 1rem;
}

.form-errors {
  color: var(--danger);
  font-size: 2rem;
  width: 100%;
  text-align: center;
  padding-top: 1rem;
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
#input-color {
  padding: 0 !important;
  appearance: none;
  background-color: transparent;
  height: 3.8rem;
}
</style>
