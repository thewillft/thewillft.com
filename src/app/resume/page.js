import Highlighter from '@/components/highlighter';
import Experience from '@/components/experience';

import { experiences, education } from '@/data/resume';

export const metadata = {
	title: 'Resume',
};

export default function Resume() {
	return (
		<main className="">
			<section className="about">
				<h1 className="text-2xl font-semibold underline">About</h1>
				<p className="text-muted mt-3">
					<Highlighter
						string={
							"My name is Will and I am a senior at Rochester Institute of Technology (RIT), pursuing a bachelor's degree in Computer Science. " +
							"I'm currently searching for software engineering internship positions to fulfill my degree's cooperative education requirements. " +
							"I'm passionate about all things programming and am currently practicing my web development skills. " +
							"Previously, I've worked on desktop applications, Discord bots, monitoring tools, API integrations, and more. " +
							"I'm most proud of the time I spent freelancing at CryptoKnight LLC, in which I was able to play a pivotal role in helping them provide cryptocurrency trading services to their clients."
						}
						substrings={[
							'Will',
							"bachelor's degree in Computer Science",
							'web development',
							'desktop applications',
							'Discord bots',
							'monitoring tools',
							'API integrations',
						]}
					/>
				</p>
			</section>
			<section className="skills mt-6">
				<h1 className="text-2xl font-semibold underline">Skills</h1>
				<ul className="list-disc pl-5 mt-3">
					<li>
						Language:{' '}
						<span className="text-muted">
							Python, Go, Java, HTML, CSS, Javascript, Node.js, C#, C, JSON
						</span>
					</li>
					<li>
						Framework:{' '}
						<span className="text-muted">
							React, Express.js, Bootstrap CSS, Material UI, Laravel, Tailwind CSS, Next.js
						</span>
					</li>
					<li>
						Database: <span className="text-muted">MySQL, MongoDB, PostgreSQL</span>
					</li>
					<li>
						Other: <span className="text-muted">Git, Docker, Linux, Unity</span>
					</li>
				</ul>
			</section>
			<section className="experience mt-6">
				<h1 className="text-2xl font-semibold underline">Experience</h1>
				{experiences?.map((exp) => (
					<Experience key={exp.company} {...exp} />
				))}
			</section>
			<section className="education mt-6">
				<h1 className="text-2xl font-semibold underline">Education</h1>
				<Experience {...education} />
			</section>
		</main>
	);
}
