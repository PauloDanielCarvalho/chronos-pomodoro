import type { TaskStateModel } from "../models/TaskStateModel";

export function getNextCycleTypes(currentCycle: number): keyof TaskStateModel['config'] {
  if (currentCycle % 8 === 0) return 'longBreakTime';
  if (currentCycle % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}