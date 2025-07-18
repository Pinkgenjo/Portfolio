import React, { useState, useEffect } from "react";
import styles from "./experience.module.css";

const BASE_URL = import.meta.env.BASE_URL;

export const Experience = () => {
    const [skills, setSkills] = useState([]);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}data/skills.json`)
            .then(response => response.json())
            .then(data => setSkills(data));

        fetch(`${BASE_URL}data/history.json`)
            .then(response => response.json())
            .then(data => setHistory(data));
    }, []);

    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Minha Jornada</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={`${BASE_URL}assets/skills/${skill.imageSrc}`} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <img
                                    src={`${BASE_URL}assets/history/${historyItem.imageSrc}`}
                                    alt={`${historyItem.organisation} Logo`}
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map((experience, id) => {
                                            return <li key={id}>{experience}</li>;
                                        })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};