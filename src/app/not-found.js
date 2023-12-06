import Link from 'next/link';

export default function NotFound() {
	return (
		<main className="flex flex-1">
			<div className="m-auto flex flex-col justify-center items-center">
				<h2 className="text-xl text-rose-400 font-semibold">Not Found</h2>
				<p className="text-neutral-400">Could not find requested resource</p>
				<Link href="/" className="hoverable">Go Home →</Link>
			</div>
		</main>
	);
}