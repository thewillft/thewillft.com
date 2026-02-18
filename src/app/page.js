import Image from 'next/image';
import Link from 'next/link';

import Highlighter from '@/components/highlighter';
import ProjectGrid from '@/components/projectgrid';

import { projects } from '@/data/projects';
import { beyondProjects } from '@/data/beyond-projects';
import { profile } from '@/data/profile';

export default function Home() {
	return (
		<main id="main" className="">
			<section className="hero flex flex-col-reverse lg:flex-row items-center mb-16 lg:mb-24">
				<div className="flex flex-col flex-1 justify-center items-center lg:items-start mt-16 lg:mt-0">
					<h1 className="text-3xl font-bold">Hey, I&apos;m {profile.name}!</h1>
					<p className="text-md text-muted text-center lg:text-left mt-3">
						<Highlighter string={profile.description} substrings={profile.highlightWords} />
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
