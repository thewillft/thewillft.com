import React from 'react';

export default function Card({ children, className = '' }) {
	return (
		<div className={`p-4 h-full shadow shadow-md rounded border border-neutral-600/25 bg-[#1b1b1b] ${className}`}>
			{children}
		</div>
	);
}