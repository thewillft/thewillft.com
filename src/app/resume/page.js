import Highlighter from '@/components/highlighter';
import Experience from '@/components/experience';

import { about, skills, experiences, education } from '@/data/resume';

export const metadata = {
	title: 'Resume',
};

export default function Resume() {
	return (
		<main id="main" className="">
			<section className="about">
				<h1 className="text-2xl font-semibold underline">About</h1>
				<p className="text-muted mt-3">
					<Highlighter string={about.text} substrings={about.highlightWords} />
				</p>
			</section>
			<section className="experience mt-6">
				<h1 className="text-2xl font-semibold underline">Experience</h1>
				{experiences?.map((exp) => (
					<Experience key={exp.title} {...exp} />
				))}
			</section>
			<section className="skills mt-6">
				<h1 className="text-2xl font-semibold underline">Skills</h1>
				<ul className="list-disc pl-5 mt-3">
					{skills.map((skill) => (
						<li key={skill.category}>
							{skill.category}: <span className="text-muted">{skill.items}</span>
						</li>
					))}
				</ul>
			</section>
			<section className="education mt-6">
				<h1 className="text-2xl font-semibold underline">Education</h1>
				{education.map((edu) => (
					<Experience key={edu.title} {...edu} />
				))}
			</section>
		</main>
	);
}
