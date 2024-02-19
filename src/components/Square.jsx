import React from "react";

const Square = ({ value, onClick }) => {
	return (
		<>
			<div
				onClick={onClick}
				className='bg-zinc-950 border-zinc-800  text-zinc-300 cursor-pointer h-24 w-24 flex justify-center items-center text-center border '
			>
				<h1 className='text-5xl'>{value}</h1>
			</div>
		</>
	);
};

export default Square;
