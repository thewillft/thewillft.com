import Card from '@/components/card';

export default function ProjectGrid({ projects }) {
	return (
		<div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
			{projects.map((project, i) => {
				const card = (
					<Card title={project.title} subtitle={project.year} description={project.description} />
				);

				return project.url ? (
					<a key={i} href={project.url} rel="noopener noreferrer" target="_blank">
						{card}
					</a>
				) : (
					<div key={i}>{card}</div>
				);
			})}
		</div>
	);
}
