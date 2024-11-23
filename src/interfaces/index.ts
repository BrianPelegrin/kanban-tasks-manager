
interface ITask {
    id: string;
    name: string;
    description: string;
    subTasks?: ITask[]
    type?: 'task' | 'subtask'
    ownerId: string;
    color?: string;
}

interface IKanbaColumn {
    id: string;
    name: string;
    color: string;
    tasks: ITask[]
}

export type { ITask, IKanbaColumn }


