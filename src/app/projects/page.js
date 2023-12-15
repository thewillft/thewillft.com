import ProjectGrid from './projectgrid.js';

export const metadata = {
	title: 'Projects',
};

export default function Projects() {
	return (
		<main className="">
			<div className="mb-7">
				<h1 className="text-3xl font-semibold">Projects</h1>
			</div>
			<ProjectGrid />
		</main>
	);
}