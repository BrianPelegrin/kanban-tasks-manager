import { ref } from "vue"
import useTaskStore from '../store/useTaskStore';
import { ITask } from "../interfaces";

const currentTask = ref<ITask>();
const columnOwnerId = ref<string>('');
const columnToAssingId = ref<string>('');

const useDragAndDrop = () => {
    const { kanbanColumns } = useTaskStore()

    const onDragStart = (task: ITask) => {
        currentTask.value = task;
        columnOwnerId.value = task.ownerId;
    }

    const onDragOver = (event: any, currentColumnId: string) => {
        event.preventDefault();
        columnToAssingId.value = currentColumnId
    }

    const onDrop = () => {
        if (currentTask.value?.ownerId == columnToAssingId.value) return;

        const ownerIndex = kanbanColumns.value.findIndex(c => c.id == columnToAssingId.value)
        if (ownerIndex >= 0) {
            currentTask.value!.ownerId = kanbanColumns.value[ownerIndex].id
            kanbanColumns.value[ownerIndex].tasks.push(currentTask.value!)
        }

        const toRemoveIndex = kanbanColumns.value.findIndex(c => c.id == columnOwnerId.value)
        if (toRemoveIndex >= 0) {
            kanbanColumns.value[toRemoveIndex].tasks = kanbanColumns.value[toRemoveIndex].tasks.filter(t => t.id != currentTask.value!.id)
        }


    };


    return {
        onDragStart,
        onDragOver,
        onDrop
    }
}

export default useDragAndDrop