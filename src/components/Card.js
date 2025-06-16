import React from 'react';

export default function Card({ children, className = '', hoverEffect = false }) {
	const hoverClasses = hoverEffect
		? 'transition-transform duration-200 ease-in-out hover:scale-[1.025] hover:shadow-2xl hover:border-rose-400/30'
		: '';
	return (
		<div className={`p-4 h-full shadow rounded border border-neutral-600/25 bg-[#1b1b1b] ${hoverClasses} ${className}`}>
			{children}
		</div>
	);
}