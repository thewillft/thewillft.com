'use client';

import { useState, useEffect } from 'react';
import ProjectGrid from '@/components/projectgrid';

export default function Projects() {
	const [projects, setProjects] = useState([]);

	// todo: add loading skeleton for project grid

	useEffect(() => {
		fetch('https://api.github.com/users/thewillft/repos?per_page=10')
			.then((res) => res.json())
			.then((data) => {
				const mapped = data.map((repo) => ({
					title: repo.name,
					description: repo.description,
					year: repo.created_at?.substring(0, 4),
					url: repo.html_url,
				}));
				setProjects(mapped);
			});
	}, []);

	return (
		<main id="main" className="">
			<div className="mb-7">
				<h1 className="text-3xl font-semibold">Projects</h1>
			</div>
			<ProjectGrid projects={projects} />
		</main>
	);
}
