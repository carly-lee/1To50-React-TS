'use client';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  function onStart(){
    router.push('/game-screen');
  }
  
  return (
    <div>
      <h1>1 to 50</h1>
      <div>Click 1 to 50 as fast as you can!</div>
      <button onClick={onStart}>Let's start!</button>
    </div>
  )
}
