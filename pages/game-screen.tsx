import Board from "@/app/src/Board";
import Timer from "@/app/src/Timer";
import { useRouter } from "next/navigation";
import { useState } from "react";

type GameStatus = 'playing' | 'end';

export default function GameScreen(){
  const router = useRouter();
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing');

  function onGameEnd(){
    setGameStatus('end');
  }

  function goHome(){
    router.push('/');
  }

  return (
    <div>
      <div>Press the numbers from 1 to 50 as fast as you can.</div>
      {gameStatus === 'end' ? <div>You pressed all numbers!</div> : null}
      {gameStatus === 'end' ? <button onClick={goHome}>Go to home page</button> : null}
      <Timer status={gameStatus === 'playing' ? 'on' : 'stop'} />
      <Board onGameEnd={onGameEnd} />
    </div>
  )
}