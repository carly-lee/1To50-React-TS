import { useEffect, useRef, useState } from "react";
import { getShuffledNumbers } from "./Utils";
import Cell from "./Cell";

interface Props {
  onGameEnd: () => void;
}
export default function Board({onGameEnd}: Props){
  const [numbers, setNumbers] = useState(getShuffledNumbers(1));
  const [cells, setCells] = useState<JSX.Element[]>([]);
  const [currentNumber, setCurrentNumber] = useState(1);
  const nextNumbers = useRef(new Array(25).fill(0).map((_, idx) => idx+26));

  useEffect(() => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    if(sum === 0) {
      onGameEnd();
    }
    const numberCells = [];
    for(let i = 0; i < 25; i++){
      numberCells.push(<Cell key={i} index={i} value={numbers[i]} onClick={onCellClick} />)
    } 
    setCells(numberCells);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numbers]);

  function onCellClick(idx: number, value: number){
    if(value !== currentNumber) return;
    setCurrentNumber(currentNumber + 1);
    const newNumbers = [...numbers];
    newNumbers[idx] = nextNumbers.current.shift() || 0;
    setNumbers(newNumbers);
  }

  return(
    <div className="board">{cells}</div>
  )
}

