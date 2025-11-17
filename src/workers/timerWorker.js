let isRunning = false;

self.onmessage = (event) => {
  if (isRunning) return;
    
  isRunning = true;

  const state = event.data;
  const { secondsRemaining, activeTask } = state;
  console.log(state);
  // Converte startDate para timestamp (número) se for string ou Date
  const startDateTimestamp = typeof activeTask.startDate === 'string' 
    ? new Date(activeTask.startDate).getTime() 
    : activeTask.startDate instanceof Date 
    ? activeTask.startDate.getTime()
    : activeTask.startDate;
  const endDate = startDateTimestamp + secondsRemaining * 1000;
  let countDownSeconds = Math.ceil((endDate - Date.now()) / 1000);

  function tick() {
    console.log(countDownSeconds);
    self.postMessage(countDownSeconds);
    const now = new Date();
    countDownSeconds = Math.floor((endDate - now) / 1000);

    setTimeout(tick, 1000);
    
  }
  tick();
};