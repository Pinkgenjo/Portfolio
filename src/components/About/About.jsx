import React from "react";
import styles from "./about.module.css";

const BASE_URL = import.meta.env.BASE_URL;

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Sobre</h2>
            <div className={styles.content}>
                <img
                    src={`${BASE_URL}assets/about/laptop.png`}
                    alt="Imagem de um laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={`${BASE_URL}assets/about/cursorIcon.png`} alt="Ícone de cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>Foco em Frontend</h3>
                            <p>
                                Estou construindo projetos e aprofundando meus estudos em HTML, CSS e JavaScript, com foco especial na criação de interfaces com React.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={`${BASE_URL}assets/about/dbIcon.png`} alt="Ícone de banco de dados" />
                        <div className={styles.aboutItemText}>
                            <h3>Banco de Dados</h3>
                            <p>
                                Tenho conhecimento em modelagem de dados e estou aprendendo a utilizar bancos SQL (como PostgreSQL) para armazenar informações de forma eficiente.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={`${BASE_URL}assets/about/serverIcon.png`} alt="Ícone de servidor" />
                        <div className={styles.aboutItemText}>
                            <h3>Aprendendo Backend</h3>
                            <p>
                                Atualmente, estou estudando Python para entender como criar APIs e sistemas completos que se conectam ao frontend e ao banco de dados.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};