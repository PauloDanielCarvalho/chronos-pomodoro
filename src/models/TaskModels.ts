import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    startDate: Date;
    completeDate: Date | null;
    interruptedDate: Date | null;
    type: keyof TaskStateModel['config'];

};