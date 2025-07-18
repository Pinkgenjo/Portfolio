import React, { useState, useEffect } from "react";
import styles from "./projects.module.css";

const BASE_URL = import.meta.env.BASE_URL;

export const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}data/projects.json`)
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projetos</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return (
                        <div key={id} className={styles.projectCard}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>
                            <ul className={styles.skills}>
                                {project.skills.map((skill, id) => {
                                    return (
                                        <li key={id} className={styles.skill}>
                                            {skill}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className={styles.links}>
                                <a href={project.demo} className={styles.link} target="_blank" rel="noopener noreferrer">
                                    Demo
                                </a>
                                <a href={project.source} className={styles.link} target="_blank" rel="noopener noreferrer">
                                    Código
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};