import Card from '@/components/Card';

export default function ProjectCard({ title, desc, year }) {
	return (
		<Card hoverEffect className="group">
			<div className="group-hover:underline flex items-center mb-2">
				<h1 className="mr-1 text-lg">{title}</h1>
				<time dateTime={year} className="text-xs text-rose-400">{year}</time>
			</div>
			<div className="mb-2">
				<p className="text-sm text-neutral-400">{desc}</p>
			</div>
		</Card>
	);
}