<script setup lang="ts">
import type { ITask } from "../interfaces";
import TheModal from "./TheModal.vue";
import { ref } from "vue";
import useDragAndDrop from "../composables/useDragAndDrop";
interface IProps {
  task: ITask;
}
defineProps<IProps>();
const showDetails = ref<boolean>(false);
const isEditing = ref<boolean>(false);
const { onDragStart } = useDragAndDrop();
</script>

<template>
  <div
    :draggable="true"
    @dragstart="onDragStart(task)"
    v-if="task.type == 'task'"
    @click="showDetails = true"
    :style="!task.description ? 'height: 3.8rem;' : ''"
    class="task-card"
  >
    <div class="task-header">
      <p class="task-name">
        {{ task.name }}
      </p>
      <div class="subtask-icon">
        <div
          v-if="task.color"
          class="task-color"
          style="padding: 1rem; border-radius: 4rem"
          :style="`background-color: ${task.color};`"
        ></div>
      </div>
    </div>
    <div class="task-body" v-if="task.description">
      <p class="task-description">
        {{ task.description }}
      </p>
    </div>
  </div>
  <div class="subtask-card" v-else>
    <div class="subtask-name">
      {{ task.name }}
    </div>
    <div class="subtask-actions">
      <div class="subtask-icon">
        <button
          @click="showDetails = true"
          class="btn btn-indigo"
          style="border-radius: 4rem"
        >
          <i class="bi bi-eye"></i>
        </button>
        <button class="btn btn-danger" style="border-radius: 4rem">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  </div>

  <the-modal :show-modal="showDetails" @close-modal="showDetails = false">
    <template #actions>
      <button
        v-if="isEditing"
        @click="isEditing = false"
        class="btn btn-success"
        style="border-radius: 4rem"
      >
        <i class="bi bi-check-lg"></i>
      </button>
      <button
        v-else
        @click="isEditing = true"
        class="btn btn-primary"
        style="border-radius: 4rem"
      >
        <i class="bi bi-pen"></i>
      </button>
    </template>
    <template #header>
      <div v-if="isEditing" style="width: 35%">
        <input v-model="task.name" class="form-input" />
      </div>
      <p v-else>{{ task.name }}</p>
    </template>
    <template #body>
      <div class="task-modal-body">
        <div class="task-modal-description">
          <textarea
            class="form-input"
            v-model="task.description"
            v-if="isEditing"
          ></textarea>
          <p v-else>
            {{ task.description }}
          </p>
        </div>
        <div v-if="task.subTasks" class="task-modal-subtask">
          <task-card
            v-for="subtask in task.subTasks"
            :key="subtask.id"
            :task="subtask"
          />
        </div>
      </div>
    </template>
  </the-modal>
</template>

<style scoped>
.task-card {
  background-color: var(--white);
  box-shadow: var(--shadow);
  border-radius: 0.5rem;
  height: 20rem;
}

.task-header {
  padding: 1rem;
  border-bottom: var(--border);
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p {
  margin: 0;
}

.task-body {
  padding: 1rem;
}

.task-description {
  text-align: justify;
  height: 13rem;
  overflow-y: scroll;
  padding: 0.2rem;
}

.subtask-icon {
  display: flex;
  gap: 0.5rem;
}
.subtask-icon button {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
}

.task-modal-body {
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  max-height: 32rem;
}

.task-modal-subtask {
  height: 20rem;
  overflow-y: scroll;
}

.subtask-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  border: var(--border);
  padding: 0.3rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
