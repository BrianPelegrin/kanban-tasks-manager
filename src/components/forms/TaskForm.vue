<script setup lang="ts">
import type { ITask } from "../../interfaces/index";
import { ref } from "vue";

interface IEmits {
  (event: "sumbit", task: ITask): void;
}
const emits = defineEmits<IEmits>();

const task = ref<ITask>({
  id: "",
  name: "",
  description: "",
  ownerId: "",
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
  <form @submit.prevent="validate" class="task-form">
    <div class="input-container">
      <label for="task-input-name">Nombre:</label>
      <input
        v-model="task.name"
        id="task-input-name"
        type="text"
        class="form-input"
      />
    </div>
    <div class="input-container">
      <label for="task-input-color">Color:</label>
      <input
        v-model="task.color"
        id="task-input-color"
        type="color"
        class="form-input"
      />
    </div>
    <div class="input-container textarea">
      <label for="task-input-description">Descripcion:</label>
      <textarea
        v-model="task.description"
        id="task-input-description"
        class="form-input"
      ></textarea>
    </div>
    <div class="input-container">
      <button type="submit" class="btn btn-success">Guardar Tarea</button>
    </div>
  </form>
</template>

<style scoped>
.task-form {
  height: 90%;
  display: grid;
  padding: 1rem 2rem 1rem 1rem;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.input-container {
  padding: 0 1rem;
}

.input-container.textarea {
  grid-column: 1/3;
}

.form-errors {
  color: var(--danger);
  font-size: 2rem;
  width: 100%;
  text-align: center;
  padding-top: 1rem;
}
</style>
