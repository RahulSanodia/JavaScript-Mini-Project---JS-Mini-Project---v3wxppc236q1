import React, { useState } from 'react'
import './TicTacToe.css';

const TicTacToe = () => {

    const [turn, setTurn] = useState('x');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState();
    const checkForWinner = (squares) => {
        let combos =
        {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6],
            ],
        };

        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                // console.log(pattern);
                if (
                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === '') {

                } else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ) {
                    setWinner(squares[pattern[0]]);
                }
            });
        };
    };
    const handleClick = (num) => {
        if (cells[num] !== '') {
            alert('You Can Not Click twice')
            return;
        }
        // alert(num); 
        let squares = [...cells];

        if (turn === 'x') {
            squares[num] = 'x';
            setTurn('o');
        } else {
            squares[num] = 'o';
            setTurn('x');
        }
        checkForWinner(squares);
        setCells(squares);
        //  console.log(squares);
    }

    const handleRestart = () => {
        setWinner(null);
        setCells(Array(9).fill(''));
    }
    const Cell = ({ num }) => {
        return <td onClick={() => handleClick(num)}> {cells[num]} </td>;
    };

    return (
        <div className='main-container'>
            <div className='container1'>
                <div className=" winnerH1"><h2>Now : {turn} Turns</h2></div>
                <table className='tbleBody'>
                    <tbody className="trCell" >
                        <tr className="trCell">
                            <Cell num={0} />
                            <Cell num={1} />
                            <Cell num={2} />
                        </tr>
                        <tr className="trCell" >
                            <Cell num={3} />
                            <Cell num={4} />
                            <Cell num={5} />
                        </tr>
                        <tr className="trCell">
                            <Cell num={6} />
                            <Cell num={7} />
                            <Cell num={8} />
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='container2'>
                {winner && (
                    <>
                        <p>
                            <h2 className="winnerAno">{winner} is winner</h2>
                        </p>
                        <div><button id="btn-winner" onClick={() => handleRestart()}>Play again</button></div>
                    </>
                )}
                <button className="button-5" onClick={() => handleRestart()} >Reset</button>
            </div>
        </div>
    )
};

export default TicTacToe