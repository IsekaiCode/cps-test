import { useState } from 'react';
import './App.css'

function Game({timer, count, setCount}) {

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Time left: {timer}</h1>
      <button className="btn1" onClick={handleClick}>
        Clicked {count} times
      </button>
    </div>
  );
}

function Start({ onButtonClick }) {
    return (
      <div>
        <h1>CPS test</h1>
        <button className="btn1" onClick={ onButtonClick } >
          Click to begin
        </button>
      </div>
    ); 
}

export default function MyApp() {
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState(60);
  const [count, setCount] = useState(0);

  if (start) {
    if (timer == 0) {
      return (
        <div>
          <h1>GAME OVER</h1>
          <h1>Your record is {count}</h1>
        </div>
      );
    } else {
      setTimeout(() => {setTimer(timer - 1);}, 100);
      return (
        <Game timer={timer} count={count} setCount={setCount}/>
      );
    }
  } else {
    return (
      <Start onButtonClick={() => setStart(true)}/>
    );
  }
}