'use client'

import { useState, useEffect } from 'react'

import ProjectCard from './projectcard.js'

export default function Projects() {
    const [projects, setProjects] = useState([])

    // todo: add loading skeleton for project list

    useEffect(() => {
        fetch('https://api.github.com/users/thewillft/repos?per_page=100')
            .then((data) => data.json())
            .then((data) => { setProjects(data) })
    }, [])

    return (
        <main className="">
            <div className="mb-7">
                <h1 className="text-3xl font-semibold">Projects</h1>
            </div>
            <div className="grid gap-4 grid-cols-3">
                {projects.map(project => (
                    <a key={project.id} href={project.html_url} rel="noopener noreferrer" target="_blank">
                        <ProjectCard 
                            title={project.name} 
                            desc={project.description} 
                            year={project.created_at.substring(0, 4)}
                        />
                    </a>
                ))}
            </div>
        </main>
    )
}