<script setup lang="ts">
import { computed, watch, ref } from "vue";

interface IProps {
  showModal: boolean;
  showFooter?: boolean;
}
interface IEmits {
  (event: "close-modal"): void;
}

const emits = defineEmits<IEmits>();
const props = withDefaults(defineProps<IProps>(), {
  showFooter: false,
});
const showContent = ref<boolean>(false);
watch(
  computed(() => props.showModal),
  (newval) => {
    if (newval) {
      setTimeout(() => {
        showContent.value = newval;
      }, 200);
    } else {
      showContent.value = newval;
    }
  }
);
</script>
<template>
  <transition>
    <div v-if="showModal" class="modal">
      <transition name="slide-up">
        <div v-if="showContent" class="modal-content">
          <div class="modal-header">
            <slot name="header" />
            <div class="actions">
              <slot name="actions" />
              <button
                style="border-radius: 4rem"
                class="btn btn-danger"
                @click="$emit('close-modal')"
              >
                <i class="bi bi-x-lg" style="cursor: pointer"></i>
              </button>
            </div>
          </div>
          <div class="modal-body">
            <slot name="body" />
          </div>
          <div v-if="showFooter" class="modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
.modal {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.274);
  top: 0%;
  bottom: 0%;
  left: 0;
  right: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  width: 100rem;
  max-height: 40rem;
  min-height: 40rem;
  background-color: var(--white);
  border-radius: 0.5rem;
}
.modal-header {
  padding: 1rem;
  border-bottom: var(--border);
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-footer {
  padding: 1rem;
  border-top: var(--border);
  font-weight: bold;
  display: flex;
  align-items: center;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.modal-body {
  height: 90%;
  overflow-y: scroll;
}
.fade {
  transition: opacity 0.15s linear;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
