export default function ProjectCard({ title, desc, year }) {
	return (
		<div className="group p-4 h-full shadow shadow-md rounded border border-card-border bg-card">
			<div className="group-hover:underline flex items-center mb-2">
				<h1 className="mr-1 text-lg">{title}</h1>
				<time dateTime={year} className="text-xs text-accent">{year}</time>
			</div>
			<div className="mb-2">
				<p className="text-sm text-muted">{desc}</p>
			</div>
		</div>
	);
}