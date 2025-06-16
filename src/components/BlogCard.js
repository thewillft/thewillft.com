import Image from 'next/image';
import Card from '@/components/Card';

export default function BlogCard({ title, description, heroImage }) {
	return (
		<Card hoverEffect className="flex flex-col">
			<div className="relative w-full h-48 mb-4">
				<Image
					src={heroImage || '/placeholder.png'}
					alt={title}
					fill
					className="object-cover rounded-t"
				/>
			</div>
			<div className="flex-1 p-4">
				<h1 className="mr-1 text-lg">{title}</h1>
				<p className="text-neutral-400 line-clamp-3">
					{description}
				</p>
			</div>
		</Card>
	);
}