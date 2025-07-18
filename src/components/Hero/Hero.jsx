import React from "react";
import styles from "./hero.module.css";

const BASE_URL = import.meta.env.BASE_URL;

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Olá, eu sou Emerson Ferreira</h1>
                <p className={styles.description}>
                    Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e desenvolvimento de software. Atualmente, estou focado em aprender e construir projetos com React e JavaScript.
                </p>
                <a href="mailto:emersonferreira.dev@gmail.com" className={styles.contactBtn}>
                    Fale Comigo
                </a>
            </div>
            <img
                src={`${BASE_URL}assets/profile.png`}
                alt="Imagem de perfil"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};