import React from "react";
import styles from "./hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
            <h1 className={styles.title}>Olá, eu sou o Emerson</h1>
            <p className={styles.description}>
            Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e desenvolvimento de software. Atualmente, estou focado em aprender e construir projetos com React e JavaScript.
            </p>
                <a href="mailto:emersonferreira0802@gmail.com" className={styles.contactBtn}>
                    Fale Comigo
                </a>
            </div>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};