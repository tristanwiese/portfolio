import "./board.css";

import React from "react";
import Square from "../square/square";
import { useState } from "react";

interface TickTackToeType {
  handleWin: CallableFunction;
  playing: boolean;
  addMove: CallableFunction;
}

const TickTackToeBoard: React.FC<TickTackToeType> = ({
  handleWin,
  playing,
  addMove,
}) => {
  const winnableId: Array<Array<number>> = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  const [currentPlayer, setCurrentPlayer] = useState<string>("X");
  const [Xlist, _setXlist] = useState<Array<number>>([]);
  const [Olist, _setOlist] = useState<Array<number>>([]);
  const [count, setcount] = useState<number>(1);

  function checkWin(list: Array<number>): boolean {
    for (let i = 0; i < winnableId.length; i++) {
      if (
        list.includes(winnableId[i][0]) &&
        list.includes(winnableId[i][1]) &&
        list.includes(winnableId[i][2])
      ) {
        return true;
      }
    }
    return false;
  }

  function handleClick(id: number) {
    if (!playing) return;

    setcount(count + 1);

    let move = {
      player: currentPlayer,
      position: id,
      move: count,
    };
    addMove(move);

    if (currentPlayer === "X") {
      Xlist.push(id);
      setCurrentPlayer("O");
    } else {
      Olist.push(id);
      setCurrentPlayer("X");
    }
    if (count === 9) {
      handleWin("tie");
    }

    if (Xlist.length >= 3) {
      if (checkWin(Xlist)) {
        handleWin("X");
        return;
      }
    }
    if (Olist.length >= 3) {
      if (checkWin(Olist)) {
        handleWin("O");
        return;
      }
    }
  }

  let html = (
    <div className="board">
      <Square
        text={currentPlayer}
        handleClick={handleClick}
        id={1}
        playing={playing}
      />
      <Square
        text={currentPlayer}
        handleClick={handleClick}
        id={2}
        playing={playing}
      />
      <Square
        text={currentPlayer}
        handleClick={handleClick}
        id={3}
        playing={playing}
      />
      <Square
        text={currentPlayer}
        handleClick={handleClick}
        id={4}
        playing={playing}
      />
      <Square
        text={currentPlayer}
        handleClick={handleClick}
        id={5}
        playing={playing}
      />
      <Square
        text={currentPlayer}
        handleClick={handleClick}
        id={6}
        playing={playing}
      />
      <Square
        text={currentPlayer}
        handleClick={handleClick}
        id={7}
        playing={playing}
      />
      <Square
        text={currentPlayer}
        handleClick={handleClick}
        id={8}
        playing={playing}
      />
      <Square
        text={currentPlayer}
        handleClick={handleClick}
        id={9}
        playing={playing}
      />
    </div>
  );
  return html;
};

export default TickTackToeBoard;
