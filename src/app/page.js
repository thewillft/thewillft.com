import Image from 'next/image';
import Link from 'next/link';

import Highlighter from '@/components/highlighter';
import ProjectGrid from '@/components/projectgrid';

import { projects } from '@/data/projects';
import { beyondProjects } from '@/data/beyond-projects';

export default function Home() {
	return (
		<main id="main" className="">
			<section className="hero flex flex-col-reverse lg:flex-row items-center mb-16 lg:mb-24">
				<div className="flex flex-col flex-1 justify-center items-center lg:items-start mt-16 lg:mt-0">
					<h1 className="text-3xl font-bold">Hey, I&apos;m Will!</h1>
					<p className="text-md text-muted text-center lg:text-left mt-3">
						<Highlighter
							string={
								"I'm a software developer passionate about automation, scripting, and web development. " +
								'I often work on both open-source and commission-based projects. ' +
								'I enjoy playing badminton, cooking, and gaming.'
							}
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
					<Link href="/projects" className="text-xs text-accent hover:underline">
						View All →
					</Link>
				</div>
				<ProjectGrid projects={projects} />
			</section>
			<section className="beyond-the-code mt-16 lg:mt-20">
				<div className="flex items-center mb-7">
					<h1 className="text-2xl font-semibold mr-2">Beyond the Code</h1>
				</div>
				<ProjectGrid projects={beyondProjects} />
			</section>
		</main>
	);
}
