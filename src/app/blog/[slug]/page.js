import { client } from '../../../../tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import Codeblock from '@/components/Codeblock';
import InlineCode from '@/components/InlineCode';
import Link from '@/components/Link';

const components = {
	h1: (props) => <h1 className="text-4xl font-extrabold mb-4" {...props} />,
	h2: (props) => <h2 className="text-3xl font-bold mb-3" {...props} />,
	h3: (props) => <h3 className="text-2xl font-semibold mb-2" {...props} />,
	h4: (props) => <h4 className="text-xl font-medium mb-1" {...props} />,
	h5: (props) => <h5 className="text-lg font-normal" {...props} />,
	h6: (props) => <h6 className="text-base font-light" {...props} />,
	p: (props) => <p className="mb-4" {...props} />,
	ul: (props) => <ul className="list-disc list-outside mb-4 ml-6" {...props} />,
	ol: (props) => <ol className="list-decimal list-outside mb-4 ml-6" {...props} />,
	li: (props) => <li className="mb-1" {...props} />,
	blockquote: (props) => (
		<blockquote className="border-l-4 border-rose-400 pl-4 py-2 my-4 italic text-neutral-300" {...props} />
	),
	a: (props) => <Link {...props} />,
	code: (props) => <InlineCode {...props} />,
	code_block: (props) => <Codeblock language={props.lang}>{props.value}</Codeblock>,
	// Add other components as needed, e.g., img, a, ul, ol, li, blockquote, code, etc.
};

export default async function Page({ params }) {
	const slug = params?.slug;
	// Tina expects relativePath with .md extension
	const relativePath = `${slug}.md`;
	let post;
	try {
		const res = await client.queries.post({ relativePath });
		post = res.data.post;
	}
	catch (e) {
		return <div className="text-center text-red-400 mt-10">Post not found.</div>;
	}

	return (
		<main className="flex flex-col items-center w-full min-h-[70vh] bg-transparent">
			<article className="w-full max-w-4xl mx-auto pt-16 pb-24 px-4">
				<header className="mb-10">
					<h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-neutral-50">{post.title}</h1>
					<div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
						<span className="text-rose-400 font-semibold text-lg">{post.description}</span>
						{post.pubDate && (
							<span className="text-neutral-400 text-sm md:ml-4">{new Date(post.pubDate).toLocaleDateString()}</span>
						)}
					</div>
				</header>
				<section className="prose prose-invert max-w-none text-lg">
					<TinaMarkdown content={post.body} components={components} />
				</section>
			</article>
		</main>
	);
}