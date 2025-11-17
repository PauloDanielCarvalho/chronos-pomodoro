import type { TaskModel } from '../models/TaskModels';

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
    console.log(task, activeTask);
  if (task.completeDate) return 'Completa';
  if (task.interruptedDate) return 'Interrompida';
  if (task.id === activeTask?.id) return 'Em Progresso';
  return 'Abandonada';
}