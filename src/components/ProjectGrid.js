'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import CardGrid from '@/components/CardGrid';

export default function ProjectGrid() {
	const [projects, setProjects] = useState([]);

	// todo: add loading skeleton for project grid

	useEffect(() => {
		fetch('https://api.github.com/users/thewillft/repos?per_page=100')
			.then((data) => data.json())
			.then((data) => {
				const ps = data.map(project => ({
					id: project.id,
					title: project.name,
					desc: project.description,
					year: project.created_at.substring(0, 4),
					href: project.html_url,
				}));
				setProjects(ps);
			});
	}, []);

	return (
		<CardGrid
			items={projects}
			renderCard={(project) => (
				<ProjectCard
					key={project.id}
					title={project.title}
					desc={project.desc}
					year={project.year}
				/>
			)}
		/>
	);
}