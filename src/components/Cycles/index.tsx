import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleTypes } from "../../utils/getNextCycleTypes";
import styles from "./styles.module.css";


export function Cycles() {
  const { state } = useTaskContext(); 

  const cycleSteps = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    workTime: 'Ciclo de foco',
    shortBreakTime: 'Ciclo de descanso curto',
    longBreakTime: 'Ciclo de descanso longo',
  }

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        {cycleSteps.map((_, index)=> {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleTypes(nextCycle);
          
          return <span key={`${nextCycle}_${nextCycleType}`} className={`${styles.cycleDot} ${styles[nextCycleType]}`} aria-label={`${cycleDescriptionMap[nextCycleType]}`} title={`${cycleDescriptionMap[nextCycleType]}`}></span>
        })}
       
      </div>
    </div>
  );
}