import { client } from '../../../../tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import Codeblock from '@/components/Codeblock';
import InlineCode from '@/components/InlineCode';
import Link from '@/components/Link';

const components = {
	h1: (props) => <h1 className="text-4xl font-extrabold mb-6 mt-12" {...props} />,
	h2: (props) => <h2 className="text-3xl font-bold mb-5 mt-10" {...props} />,
	h3: (props) => <h3 className="text-2xl font-semibold mb-4 mt-8" {...props} />,
	h4: (props) => <h4 className="text-xl font-medium mb-3 mt-6" {...props} />,
	h5: (props) => <h5 className="text-lg font-normal mb-2 mt-4" {...props} />,
	h6: (props) => <h6 className="text-base font-light mb-2 mt-4" {...props} />,
	p: (props) => <p className="mb-4 leading-relaxed" {...props} />,
	ul: (props) => <ul className="list-disc list-outside my-6 ml-6 space-y-2" {...props} />,
	ol: (props) => <ol className="list-decimal list-outside my-6 ml-6 space-y-2" {...props} />,
	li: (props) => <li className="leading-relaxed" {...props} />,
	hr: (props) => <hr className="my-8 border-neutral-600" {...props} />,
	blockquote: (props) => (
		<blockquote className="border-l-4 border-rose-400 pl-6 py-3 my-6 italic text-neutral-300 leading-relaxed" {...props} />
	),
	a: (props) => <Link {...props} />,
	code: (props) => <InlineCode {...props} />,
	code_block: (props) => <div className="my-6"><Codeblock language={props.lang}>{props.value}</Codeblock></div>,
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
			<article className="w-full max-w-3xl mx-auto pt-16 pb-24 px-4">
				<header className="mb-10">
					<h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-neutral-50">{post.title}</h1>
					<div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
						<span className="text-neutral-400 font-semibold text-lg">{post.description}</span>
						{post.pubDate && (
							<span className="text-rose-400 text-sm md:ml-4">{new Date(post.pubDate).toLocaleDateString()}</span>
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