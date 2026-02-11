import Image from 'next/image';
import Link from 'next/link';

import ProjectCard from '@/components/projectcard';
import QuestionCard from '@/components/questioncard';
import Highlighter from '@/components/highlighter';

import { projects } from '@/data/projects';
import { questions } from '@/data/questions';

export default function Home() {
	return (
		<main className="">
			<section className="hero flex flex-col-reverse lg:flex-row items-center mb-16 lg:mb-24">
				<div className="flex flex-col flex-1 justify-center items-center lg:items-start mt-16 lg:mt-0">
					<h1 className="text-3xl font-bold">Hey, I&apos;m Will!</h1>
					<p className="text-md text-muted text-center lg:text-left mt-3">
						<Highlighter
							string={'I\'m a software developer passionate about automation, scripting, and web development. ' +
              'I often work on both open-source and commission-based projects. ' +
              'I enjoy playing badminton, cooking, and gaming.'}
							substrings={['software developer', 'open-source', 'commission-based']}
						/>
					</p>
				</div>
				<div className="flex flex-1 justify-center">
					<Image
						src="/me2.jpg"
						alt="picture of william tietjen"
						className="rounded"
						width={320}
						height={320}
						priority
					/>
				</div>
			</section>
			<section className="projects">
				<div className="flex items-center mb-7">
					<h1 className="text-2xl font-semibold mr-2">Projects</h1>
					<Link href="/projects" className="text-xs text-accent hover:underline">View All →</Link>
				</div>
				<div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
					{projects.map(project => (
						<a key={project.id} href={project.html_url} rel="noopener noreferrer" target="_blank">
							<ProjectCard
								{...project}
							/>
						</a>
					))}
				</div>
			</section>
			<section className="questions mt-16 lg:mt-20">
				<div className="flex items-center mb-7">
					<h1 className="text-2xl font-semibold mr-2">Questions</h1>
				</div>
				<div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
					{questions.map((question, i) => (
						<QuestionCard
							key={i}
							question={question.question}
							answer={<Highlighter string={question.answer} substrings={question.highlights} />}
						/>
					))}
				</div>
			</section>
		</main>
	);
}