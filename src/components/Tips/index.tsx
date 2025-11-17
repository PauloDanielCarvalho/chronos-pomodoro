import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleTypes } from "../../utils/getNextCycleTypes";

export function Tips() {
    const { state } = useTaskContext();
    const nextCycle = getNextCycle(state.currentCycle);
  const nextCyleType = getNextCycleTypes(nextCycle);
    // tips
    const tipsForWhenActiveTask = {
        workTime: <span>Foque em sua tarefa por {state.config.workTime} minutos</span>,
        shortBreakTime: <span>Descanse por {state.config.shortBreakTime} minutos</span>,
        longBreakTime: <span>Descanso longo de {state.config.longBreakTime} minutos</span>,
    }
    const tipsForWhenNotActiveTask = {
        workTime: <span>Proximo ciclo é de foco de {state.config.workTime} minutos</span>,
        shortBreakTime: <span>Proximo ciclo é de descanso curto de {state.config.shortBreakTime} minutos</span>,
        longBreakTime: <span>Proximo ciclo é de descanso longo de {state.config.longBreakTime} minutos</span>,
    }
    return (
        <>
            {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsForWhenNotActiveTask[nextCyleType]}
        </>
  );
}