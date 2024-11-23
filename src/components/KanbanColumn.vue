<script setup lang="ts">
import { IKanbaColumn, ITask } from "../interfaces";
import TaskCard from "./TaskCard.vue";
import TheModal from "./TheModal.vue";
import TaskForm from "./forms/TaskForm.vue";
import { ref } from "vue";
import { getId } from "../helpers";
import useDragAndDrop from "../composables/useDragAndDrop";
interface IProps {
  kanban: IKanbaColumn;
}

const props = defineProps<IProps>();
const showModal = ref<boolean>(false);
const { onDragOver, onDrop } = useDragAndDrop();
const insertTask = (task: ITask) => {
  const newTask: ITask = {
    ...task,
    id: getId(),
    type: "task",
    ownerId: props.kanban.id,
  };
  console.log("NUEVA TAREA: ", newTask);
  props.kanban.tasks.push(newTask);
  showModal.value = false;
};
</script>
<template>
  <div class="kanban-column" :style="`border-top: 1rem solid ${kanban.color}`">
    <div class="kanban-column-header">
      <div class="kanban-title">
        {{ kanban.name }}
        <span
          class="btn btn-secondary"
          style="border-radius: 4rem; font-size: 1.3rem"
        >
          {{ kanban.tasks.length }}
        </span>
      </div>
      <div class="kanban-actions">
        <button
          class="btn"
          @click="showModal = true"
          :style="`background-color: ${kanban.color}`"
          style="border-radius: 4rem; color: var(--white)"
        >
          <i class="bi bi-plus"></i>
        </button>
        <button class="btn btn-secondary" style="border-radius: 4rem">
          <i class="bi bi-three-dots"></i>
        </button>
      </div>
    </div>
    <div
      class="kanban-body"
      @dragover="onDragOver($event, kanban.id)"
      @drop="onDrop()"
    >
      <template v-if="kanban.tasks">
        <task-card v-for="task in kanban.tasks" :key="task.id" :task="task" />
      </template>
    </div>
  </div>
  <the-modal :show-modal="showModal" @close-modal="showModal = false">
    <template #header>Formulario de {{ kanban.name }}</template>
    <template #body> <task-form @sumbit="insertTask" /> </template>
  </the-modal>
</template>

<style scoped>
.kanban-column {
  background-color: var(--white);
  box-shadow: var(--shadow);
  border-radius: 0.5rem;

  padding: 1rem;
  min-height: 50rem;
  max-height: 75rem;
}

.kanban-column-header {
  padding: 1rem 0 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.kanban-actions {
  display: flex;
  gap: 1rem;
}

.kanban-title {
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.kanban-body {
  height: 90%;
  /* border: var(--border);
  border-radius: 0.5rem; */
  display: grid;
  gap: 1rem;
  padding: 0.5rem;
  overflow-y: scroll;
}
</style>
