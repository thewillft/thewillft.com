import Image from 'next/image';

export default function Card({ title, subtitle, description, image }) {
	return (
		<div className="group h-full shadow-md rounded border border-card-border bg-card overflow-hidden">
			{image && (
				<div className="relative w-full h-40">
					<Image src={image} alt={title} fill className="object-cover" />
				</div>
			)}
			<div className="p-4">
				<div className="group-hover:underline flex items-center mb-2">
					<h1 className="mr-1 text-lg">{title}</h1>
					{subtitle && <span className="text-xs text-accent">{subtitle}</span>}
				</div>
				<div>
					<p className="text-sm text-muted">{description}</p>
				</div>
			</div>
		</div>
	);
}
