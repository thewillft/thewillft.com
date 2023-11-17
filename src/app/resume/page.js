import Experience from "./experience"

const experiences = [
    {
        title: 'CryptoKnight, LLC',
        subtitle: 'Contractor / Freelancer',
        from: '2022-3',
        to: '2022-7',
        bullets: [
         'Designed, created, and maintained software which allowed the client to send their trading data from their website to their Discord server for their subscribers.',
         'Identified potential security concerns within web infrastructure related to exposure and manipulation of user and trading data.'   
        ]
    },
    {
        title: 'LYHME, Inc',
        subtitle: 'Manager',
        from: '2019-10',
        to: '2021-8',
        bullets: [
         'Supervised the company’s support team and expanded the team to meet the needs of the company.',
         'Oversaw the company’s software and web panels as well as the company’s dedicated machines in order to keep operations running smoothly.'   
        ]
    }
]

export default function Resume() {
    return (
        <main className="">
            <section className="about">
                <h1 className="text-2xl font-semibold underline">About</h1>
                <p className="text-neutral-400 mt-3">
                    My name is <span className="text-rose-400">Will</span> and I am a senior at Rochester Institute of Technology (RIT), pursuing a <span className="text-rose-400">bachelor&apos;s degree in Computer Science</span>. 
                    I&apos;m currently searching for software engineering internship positions to fulfill my degree&apos;s cooperative education requirements. 
                    I&apos;m passionate about all things programming and am currently practicing my <span className="text-rose-400">web development</span> skills. 
                    Previously, I&apos;ve worked on <span className="text-rose-400">desktop applications</span>, <span className="text-rose-400">Discord bots</span>, <span className="text-rose-400">monitoring tools</span>, <span className="text-rose-400">API integrations</span>, and more. 
                    I&apos;m most proud of the time I spent freelancing at CryptoKnight LLC, in which I was able to play a pivotal role in helping them provide cryptocurrency trading services to their clients.
                </p>
            </section>
            <section className="skills mt-6">
                <h1 className="text-2xl font-semibold underline">Skills</h1>
                <ul className="list-disc pl-5 mt-3">
                    <li>Language: <span className="text-neutral-400">Python, Go, Java, HTML, CSS, Javascript, Node.js, C#, C, JSON</span></li>
                    <li>Framework: <span className="text-neutral-400">React, Express.js, Bootstrap CSS, Material UI, Laravel, Tailwind CSS, Next.js</span></li>
                    <li>Database: <span className="text-neutral-400">MySQL, MongoDB, PostgreSQL</span></li>
                    <li>Other: <span className="text-neutral-400">Git, Docker, Linux, Unity</span></li>
                </ul>
            </section>
            <section className="experience mt-6">
                <h1 className="text-2xl font-semibold underline">Experience</h1>
                {experiences?.map(exp => <Experience key={exp.company} {...exp} />)}
            </section>
            <section className="education mt-6">
                <h1 className="text-2xl font-semibold underline">Education</h1>
                <Experience 
                    title={'Rochester Institute of Technology'}
                    subtitle={'Bachelor of Science in Computer Science'}
                    from={'2020-8'}
                    to={'2024-12'}
                    bullets={[
                        'Learned about computer science and mathematical theories involving algorithms, time/space complexities, and data structures.',
                        'Practiced important software engineering concepts such as AGILE, SOLID, GRASP, and the Software Development Life Cycle.'
                    ]}
                />
            </section>
        </main>
    )
}