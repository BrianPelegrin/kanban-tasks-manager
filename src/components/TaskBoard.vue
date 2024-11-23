<script setup lang="ts">
import { ref } from "vue";
import type { IKanbaColumn } from "../interfaces";
import { getId } from "../helpers";
import KanbanForm from "./forms/KanbanForm.vue";
import KanbanColumn from "./KanbanColumn.vue";
import TheModal from "./TheModal.vue";
import useTaskStore from "../store/useTaskStore";
const showModal = ref<boolean>(false);
const { kanbanColumns } = useTaskStore();

const insertColumn = (task: IKanbaColumn) => {
  const newColumn = { ...task, id: getId() };
  console.log(newColumn);
  kanbanColumns.value.push(newColumn);
  showModal.value = false;
};
</script>

<template>
  <the-modal :show-modal="showModal" @close-modal="showModal = false">
    <template #header>Formulario de Kanbam</template>
    <template #body>
      <kanban-form @sumbit="insertColumn" />
    </template>
  </the-modal>
  <div class="task-toolbar">
    <div class="task-toolbar-name">Task Toolbar</div>
    <div class="task-toolbar-actions">
      <div
        class="btn btn-success"
        style="font-size: 2rem; border-radius: 0.5rem"
        @click="showModal = true"
      >
        <span>Agregar Columna</span> <i class="bi bi-plus-circle"></i>
      </div>
    </div>
  </div>

  <div class="board">
    <kanban-column :kanban="col" v-for="col in kanbanColumns" :key="col.id" />
  </div>
</template>

<style scoped>
.task-toolbar {
  background-color: var(--gray-100);
  box-shadow: var(--shadow);
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 1rem 0;
  padding: 1rem;
}

.task-toolbar-actions .btn span {
  display: none;
}
.board {
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .board {
    grid-template-columns: repeat(4, 1fr);
    padding: 1rem;
  }
  .task-toolbar {
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 0 1rem 0 1rem;
  }
  .task-toolbar-actions .btn span {
    display: inline;
  }
}
</style>
