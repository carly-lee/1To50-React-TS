'use client';
import Board from "./src/Board";
import Timer from "./src/Timer";

export default function Home() {
  function onStart(){
    console.log('Clicked start')
  }
  
  return (
    <div>
      <h1>1 to 50</h1>
      <button onClick={onStart}>Let's start!</button>
      <Timer />
      <Board />
    </div>
  )
}
