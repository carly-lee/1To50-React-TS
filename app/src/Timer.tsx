import { useEffect, useState } from "react"

export default function Timer(){
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTime(time + 100);
    }, 100);
  }, [time]);

  return(
    <div>Timer :{String(Math.floor(time/60000)).padStart(2, '0')}:{String(Math.floor(time/1000%60)).padStart(2, '0')}:{String(time%1000/100).padStart(2, '0')}</div>
  )
}