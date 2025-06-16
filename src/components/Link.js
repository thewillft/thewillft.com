'use client';

import NextLink from 'next/link';
import { useEffect, useState } from 'react';

export default function Link({ url, children, className = '', ...props }) {
	const [isInternal, setIsInternal] = useState(false);
	const baseClasses = 'text-rose-400 hover:text-rose-300 underline underline-offset-4 hover:underline-offset-2 transition-all';

	useEffect(() => {
		setIsInternal(url?.startsWith('/') || url?.startsWith('#'));
	}, [url]);

	if (isInternal) {
		return (
			<NextLink
				href={url}
				className={`${baseClasses} ${className}`}
				{...props}
			>
				{children}
			</NextLink>
		);
	}

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className={`${baseClasses} ${className}`}
			{...props}
		>
			{children}
		</a>
	);
}