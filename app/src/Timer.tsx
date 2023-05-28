import { useEffect, useState } from "react"

export type TimerStatus = 'on' | 'stop';

interface Props {
  status: TimerStatus;
}

export default function Timer({status}: Props){
  const [time, setTime] = useState(0);

  useEffect(() => {
    if(status === 'stop'){
      return;
    }
    setTimeout(() => {
      setTime(time + 100);
    }, 100);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, status]);

  return(
    <div>Timer :{String(Math.floor(time/60000)).padStart(2, '0')}:{String(Math.floor(time/1000%60)).padStart(2, '0')}:{String(time%1000/100).padStart(2, '0')}</div>
  )
}