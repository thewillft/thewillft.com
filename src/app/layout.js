import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: {
		template: '%s | William Tietjen',
		default: 'William Tietjen',
	},
	description: 'Software engineer working in the biotech industry. Interested in AI, automation, and software design.',
	keywords: [],
	openGraph: {
		title: 'William Tietjen',
		description: 'Software engineer working in the biotech industry. Interested in AI, automation, and software design.',
		url: 'https://www.thewillft.com/',
		siteName: 'thewillft',
		images: [
			{
				url: 'https://www.thewillft.com/me2.jpg',
				width: 3024,
				height: 3024,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className + ' flex flex-col min-h-screen px-5 md:px-20 pt-8 md:pt-14 pb-6 md:pb-10'}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
