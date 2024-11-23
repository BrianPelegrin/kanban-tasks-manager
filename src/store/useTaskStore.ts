import { ref } from "vue"
import { IKanbaColumn } from "../interfaces"

const kanbanColumns = ref<IKanbaColumn[]>([])

const useTaskStore = () => {


    return {
        kanbanColumns
    }
}

export default useTaskStore