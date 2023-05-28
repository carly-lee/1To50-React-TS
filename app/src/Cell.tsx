
interface Props {
  index: number;
  value: number;
  onClick: (idx: number, val: number) => void;
}

export default function Cell({index, value, onClick}: Props){
  function onPressCell(){
    onClick(index, value);
  }

  if(value === 0){
    return <div className="cell"></div>
  }

  return(
    <button className="cell" onClick={onPressCell}>{value}</button>
  )
}