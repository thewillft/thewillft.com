import { client } from '../../../tina/__generated__/client';
import BlogCard from '@/components/BlogCard';
import CardGrid from '@/components/CardGrid';
import Link from 'next/link';

export default async function BlogPage() {
	const postsResponse = await client.queries.postConnection();
	const posts = postsResponse.data.postConnection.edges.map((post) => {
		const { title, description, draft, heroImage } = post.node;
		return {
			title,
			description,
			slug: post.node._sys.filename.replace('.md', ''),
			draft,
			heroImage,
		};
	}).filter(post => !post.draft);

	return (
		<main className="">
			<div className="">
				<div className="mb-7">
					<h1 className="text-3xl font-semibold">Blog</h1>
				</div>
				<CardGrid
					className="lg:grid-cols-4"
					items={posts}
					renderCard={(post) => (
						<Link href={`/blog/${post.slug}`} className="block group" key={post.slug}>
							<BlogCard
								title={post.title}
								description={post.description}
								slug={post.slug}
								heroImage={post.heroImage}
							/>
						</Link>
					)}
				/>
			</div>
		</main>
	);
}