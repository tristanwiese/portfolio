import "./ticktacktoe.css"

import TickTackToeBoard from "../board.tsx/board";
import MoveBoard from "../moveBoard/moveBoard";
import { useState } from "react";

function TickTackToe(){



    function handleWin(winner:string){
        if (winner === 'tie'){
            setwinner('Tie!');
            setplaying(false);
            setopacity(1);
        }else{
        setwinner(winner + ' Wins!');
        setplaying(false);
        setopacity(1);
    }
    }
    function addMove(move:{[key:string]:any}){
        setmoves((prevMove) => [...prevMove, move]);
    }

    const [moves, setmoves] = useState<Array<{[key:string]:any}>>([])
    const [winner, setwinner] = useState<string>('')
    const [opacity, setopacity] = useState<number>(0)
    const [playing, setplaying] = useState<boolean>(true)

   return(
        <div className="ticktacktoe-main">
            <div className="ticktacktoe-container">
                <div className="col">
                    <div className="game-title title">
                        React Tic-Tac-Toe
                    </div>

                    <TickTackToeBoard handleWin={handleWin} playing={playing} addMove={addMove}/>

                    <div className="winner-text title" style={{opacity: opacity}}>
                        {winner}
                    </div>
                </div>
                <div className="move-board-container">
                    <MoveBoard moves={moves}/>
                </div>
            </div>
        </div>
   );

}

export default TickTackToe