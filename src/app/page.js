import Image from 'next/image'
import Link from 'next/link'

import ProjectCard from './projects/projectcard'
import QuestionCard from './questioncard'
import Highlighter from './highlighter'

const projects = [
  {
    title: 'thewillft.com',
    desc: 'Personal website built using React, Next.js, and Tailwind CSS',
    year: '2023'
  },
  {
    title: 'Coming soon',
    desc: 'A project will fill this spot soon...',
    year: '2023'
  },
  {
    title: 'Coming soon',
    desc: 'A project will fill this spot soon...',
    year: '2023'
  }
]

const questions = [
  {
    question: 'What is one strength you have?',
    answer: <Highlighter 
              string={'One of my biggest strengths would be my initiative and drive. I\'m always looking for new tasks and challenges to take up in all parts of my life. If I see a problem I\'m quick to pursue a solution.'}
              substrings={['initiative', 'quick to pursue a solution']}
            />
  },
  {
    question: 'What is one weakness you have?',
    answer: <Highlighter 
              string={'One of my biggest weaknesses is letting go of projects. I\'m often double and triple checking to make sure everything is completed thoroughly. To compensate for this, I usually give myself a little revision time at the end.'}
              substrings={['letting go of projects', '']}
            />
  },
  {
    question: 'What is your learning style?',
    answer: <Highlighter 
              string={'I\'m a self-taught developer, with the addition of a college degree to strengthen my skills and learn from a different perspective. I commonly utilize resources such as Google, StackOverflow, and documentation to learn more about a topic.'}
              substrings={['self-taught developer', 'college degree']}
            />
  },
  {
    question: 'How do you work in a team?',
    answer: <Highlighter 
              string={'I find myself working well in a team environment. The added support strengthens me as a developer and I hope to strengthen others as well. The opportunity to discuss and pursue a common goal is invaluable.'}
              substrings={['working well', 'strengthens me', 'strengthen others']}
            />
  },
  {
    question: 'How do you do under pressure?',
    answer: <Highlighter 
              string={'While I usually try to get ahead and avoid situations with high pressure, I\'m more than capable of handling the heat. I often complete larger tasks given to me with short notice the same if not better than a normal task.'}
              substrings={['capable of handling the heat']}
            />
  },
  {
    question: 'What values are important to you?',
    answer: <Highlighter 
              string={'One of my most important values is integrity, especially with work. I prefer to complete tasks fully and truthfully, absent of shortcuts. I take pride in approaching everything I do to the best of my ability and getting it done right.'}
              substrings={['integrity', 'complete tasks fully', 'best of my ability']}
            />
  }
]

export default function Home() {
  return (
    <main className="">
      <section className="hero flex flex-col-reverse lg:flex-row items-center mb-16 lg:mb-24">
        <div className="flex flex-col flex-1 justify-center items-center lg:items-start mt-16 lg:mt-0">
          <h1 className="text-3xl font-bold">Hey, I&apos;m Will!</h1>
          <p className="text-md text-neutral-400 text-center lg:text-left mt-3">
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
            <Link href="/projects" className="text-xs text-rose-400 hover:underline">View All →</Link>
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
                <QuestionCard key={i} {...question} />
            ))}
        </div>
      </section>
    </main>
  )
}