import VercelIcon from '../components/icons/VercelIcon';
import TailwindIcon from '../components/icons/TailwindIcon';
import NextjsIcon from '../components/icons/NextjsIcon';
import LeetcodeIcon from '../components/icons/LeetcodeIcon';
import GithubIcon from '../components/icons/GithubIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';

export default function Footer() {
	return (
		<footer className="mt-auto pt-10 md:pt-16 flex flex-col lg:flex-row items-center justify-between">
			<div className="flex flex-1 justify-start items-center gap-4 text-neutral-400">
				<a className="" href="https://vercel.com/" rel="noopener noreferrer" target="_blank">
					<VercelIcon />
				</a>
				<a className="" href="https://tailwindcss.com/" rel="noopener noreferrer" target="_blank">
					<TailwindIcon />
				</a>
				<a className="" href="https://nextjs.org/" rel="noopener noreferrer" target="_blank">
					<NextjsIcon />
				</a>
			</div>
			<div className="flex flex-1 justify-center items-center">
				<p className="text-sm text-neutral-400">© 2025 William Tietjen. All rights reserved.</p>
			</div>
			<div className="flex flex-1 justify-end items-center gap-3">
				<a className="" href="https://leetcode.com/thewillft/" rel="noopener noreferrer" target="_blank">
					<LeetcodeIcon />
				</a>
				<a className="" href="https://github.com/thewillft" rel="noopener noreferrer" target="_blank">
					<GithubIcon />
				</a>
				<a className="" href="https://www.linkedin.com/in/thewillft" rel="noopener noreferrer" target="_blank">
					<LinkedinIcon />
				</a>
			</div>
		</footer>
	);
}