import Link from 'next/link';
import LogoIcon from '@/components/icons/LogoIcon';

const navigation = [
	// { name: 'About', href: '#' },
	{ name: 'Home', href: '/' },
	{ name: 'Projects', href: '/projects' },
	{ name: 'Resume', href: '/resume' },
	{ name: 'Blog', href: '/blog' },
];

export default function Navbar() {
	return (
		<header className="mb-10 z-50">
			<Link href="/">
				<div className="flex flex-col lg:flex-row items-center mb-2 lg:mb-4 group">
					<div className="lg:mr-4 mb-2 lg:mb-0 transition-transform duration-300 group-hover:scale-110">
						<LogoIcon />
					</div>
					<span className="text-lg font-bold transition-colors duration-300">William Tietjen</span>
				</div>
			</Link>
			<nav className="flex justify-center lg:justify-start">
				<div className="flex gap-x-3 lg:gap-x-8">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-sm lg:text-base leading-6 text-neutral-400 hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-rose-400 hover:after:w-full after:transition-all after:duration-300"
						>
							{item.name}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
}