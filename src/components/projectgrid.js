'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/card';

export default function ProjectGrid() {
	const [projects, setProjects] = useState([]);

	// todo: add loading skeleton for project grid

	useEffect(() => {
		fetch('https://api.github.com/users/thewillft/repos?per_page=100')
			.then((data) => data.json())
			.then((data) => {
				setProjects(data);
			});
	}, []);

	return (
		<div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
			{projects.map((project) => (
				<a key={project.id} href={project.html_url} rel="noopener noreferrer" target="_blank">
					<Card
						title={project.name}
						subtitle={project.created_at.substring(0, 4)}
						description={project.description}
					/>
				</a>
			))}
		</div>
	);
}
