import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
	const [state, setState] = useState(Array(9).fill(null));
	const [isXTurn, setIsXTurn] = useState(true);

	const handleClick = (index) => {
		if (state[index] === null) {
			const turn = [...state];
			turn[index] = isXTurn ? "X" : "0";
			setState(turn);
			setIsXTurn(!isXTurn);
		}
		return;
	};

	const winningConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const checkWinner = () => {
		for (let i = 0; i < winningConditions.length; i++) {
			const [a, b, c] = winningConditions[i];
			if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
				return state[a];
			}
		}
		return false;
	};

	const checkDraw = () => {
		return state.every((val) => val !== null);
	};

	const handleReset = () => {
		setState(Array(9).fill(null));
		setIsXTurn(true);
	};

	const isWinner = checkWinner();
	const isDraw = checkDraw();

	return (
		<>
			<h1 className='text-white text-lg text-center absolute top-5 left-5 '>
				Developed by{" "}
				<a
					target='_blank'
					href='https://ayushkhatri.vercel.app'
					className='underline underline-offset-2 font-bold'
				>
					@ayush-khatri
				</a>
			</h1>

			<div className='flex justify-center flex-col gap-8 items-center h-screen'>
				<div className='flex justify-center items-center gap-5'>
					{isDraw ? null : (
						<h1 className='text-white'>Player {isXTurn ? "X" : "0"} 's Turn</h1>
					)}
					<button
						onClick={handleReset}
						className='text-white border px-3 py-1 font-light bg-zinc-900 rounded'
					>
						Reset
					</button>
				</div>

				{isWinner ? (
					<p className='text-white text-lg'>{isWinner} won the game</p>
				) : isDraw ? (
					<p className='text-white text-lg'>Game Draw!</p>
				) : (
					<div className='board  place-items-center grid grid-cols-3 text-white text-center'>
						{state.map((item, index) => (
							<Square
								key={index}
								value={item}
								onClick={() => handleClick(index)}
							/>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default Board;
