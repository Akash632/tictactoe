import React, { useState } from "react";
import Sqaure from "./Sqaure";
import "./Body.css";
import win from '../../assets/win.png';
import draw from '../../assets/draw.png';

function Body() {

  let array = Array(9).fill(null);

  const [state, setState] = useState(array);

  const [XTurn, setXTurn] = useState(true);

  const winningLogic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    let copyArr = [...state];
    copyArr[index] = XTurn ? "X" : "O";
    setState(copyArr);
    setXTurn(!XTurn);
  };

  const checkWinner = () => {
    for (let logic of winningLogic) {
      const [a, b, c] = logic;
      if (
        state[a] !== null &&
        state[a] === state[b] &&
        state[b] === state[c] &&
        state[c] === state[a]
      ) {
        return true;
      }
    }

    if(state.every((value)=>value!==null)){
        return "draw";
    }
  };

  const isWinner = checkWinner();

  return (
    <div className="body-main-container">
        {isWinner ? (
        <div className="win-card">
            {isWinner === "draw"?
            <div className="win-img">
              <h1>It's a draw</h1>
              <button onClick={()=>setState(array)}>Play Again</button>

            <img src={draw}/>
            </div>
            :
            <div className="win-img">
              <h1>{XTurn?"O":"X"} Won</h1>
              <button onClick={()=>setState(array)}>Play Again</button>
              <div className="win-img-container">
              <img src={win}/>
              </div>
              </div>
            }
        </div>
      ) : (
        <>
          <div className="body-row">
            <Sqaure value={state[0]} onClick={() => handleClick(0)} />
            <Sqaure value={state[1]} onClick={() => handleClick(1)} />
            <Sqaure value={state[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="body-row">
            <Sqaure value={state[3]} onClick={() => handleClick(3)} />
            <Sqaure value={state[4]} onClick={() => handleClick(4)} />
            <Sqaure value={state[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="body-row">
            <Sqaure value={state[6]} onClick={() => handleClick(6)} />
            <Sqaure value={state[7]} onClick={() => handleClick(7)} />
            <Sqaure value={state[8]} onClick={() => handleClick(8)} />
          </div>
        </>
      )}
    </div>
  );
}

export default Body;
