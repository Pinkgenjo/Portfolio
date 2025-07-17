import React from "react";
import styles from "./contact.module.css";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contato</h2>
                <p>Fique à vontade para entrar em contato!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src="assets/contact/emailIcon.png" alt="Ícone de email" />
                    <a href="mailto:emersonferreira0802@gmail.com">emersonferreira0802@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src="assets/contact/linkedinIcon.png" alt="Ícone do LinkedIn" />
                    <a href="https://www.linkedin.com/in/emersonferreira0802/" target="_blank" rel="noopener noreferrer">linkedin.com/in/emersonferreira0802/</a>
                </li>
                <li className={styles.link}>
                    <img src="assets/contact/githubIcon.png" alt="Ícone do Github" />
                    <a href="https://github.com/Pinkgenjo/" target="_blank" rel="noopener noreferrer">Emerson Ferreira</a>
                </li>
            </ul>
        </footer>
    );
};