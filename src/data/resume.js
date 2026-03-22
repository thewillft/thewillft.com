export const about = {
	text:
		'Software engineer at Enrich Biosystems, working on a Python Qt-based desktop application which works with proprietary hardware for cell imaging, analysis, and retrieval. ' +
		"Graduated from Rochester Institute of Technology (RIT) with a bachelor's degree in Computer Science, and currently pursuing a certificate in Computer Vision from Carnegie Mellon University. " +
		'Building open-source projects like pymoonraker, a typed async Python SDK for 3D printer control, and TapReply, an AI-powered Chrome extension for generating social media replies.',
	highlightWords: [
		'Will',
		'software engineer',
		"bachelor's degree in Computer Science",
		'Computer Vision',
		'open-source projects',
	],
};

export const skills = [
	{
		category: 'Language',
		items: 'Python, Node.js, HTML/CSS/JS, Java, C#, C, JSON, YAML',
	},
	{
		category: 'Framework',
		items: 'UNet, Qt/PySide, Pytest, Pylint, MyPy, React, Next.js, Tailwind CSS',
	},
	{
		category: 'Database',
		items: 'MySQL, PostgreSQL, SQLite, MongoDB, DynamoDB',
	},
	{
		category: 'Other',
		items: 'Docker, AWS, Jenkins, Git/GitHub/GitLab',
	},
];

export const experiences = [
	{
		title: 'Enrich Biosystems',
		subtitle: 'Software Engineer',
		from: '2024-12',
		to: 'Present',
		bullets: [
			'Reduced per-image exposure time 16x by enabling the usage of 12-bit imaging functionality.',
			'Released largest update for Python Qt-based desktop application to date delivering AI-powered cell segmentation, multithreaded job scheduling for multi-hour biological imaging workflows, and enhanced visualization of microscope image data.',
			'Partnered with R&D and leadership to translate experimental requirements into production software and support critical workflows, advising on optimal experiment settings.',
			'Improved development efficiency using AI-powered tools (Cursor IDE, skills/rules files, MCP servers) throughout the entire software development life cycle.',
		],
	},
	{
		title: 'Enrich Biosystems',
		subtitle: 'Software Engineering Intern',
		from: '2024-1',
		to: '2024-12',
		bullets: [
			'Collaborated with R&D to diagnose and resolve system-level issues involving hardware control, data processing, and application behavior.',
			'Reduced dependence on engineering support through internal documentation outlining software installation and hardware maintenance practices.',
		],
	},
	{
		title: 'CryptoKnight LLC',
		subtitle: 'Contractor',
		from: '2022-3',
		to: '2022-7',
		bullets: [
			'Designed infrastructure to stream trading data from web platform to Discord, increasing user engagement and retention.',
			'Mitigated security risks within web infrastructure related to exposure of user/trading data.',
		],
	},
];

export const education = [
	{
		title: 'Rochester Institute of Technology',
		subtitle: 'Bachelor of Science in Computer Science',
		from: '2020-8',
		to: '2024-12',
		bullets: [
			'Studied algorithm analysis, data structures, and computational complexity to build a foundation for writing efficient software.',
			'Practiced software engineering methodologies including AGILE, SOLID, and the Software Development Life Cycle through team-based projects.',
			'Explored topics in artificial intelligence, cryptography, and database system internals.',
		],
	},
	{
		title: 'Carnegie Mellon University',
		subtitle: 'Certificate of Computer Vision',
		from: '2026-2',
		to: '2026-5',
		bullets: [
			'Built a foundation in image processing, feature detection and matching, and geometric transformations for visual understanding.',
			// 'Studied convolutional neural networks and image classification techniques for learning-based computer vision.',
			// 'Explored multi-view geometry, camera models, motion estimation, and physics-based vision for applications like 3D scene reconstruction.',
		],
	},
];
