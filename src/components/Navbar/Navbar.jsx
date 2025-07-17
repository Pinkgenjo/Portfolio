import React, { useState } from "react";
import styles from "./navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Portfólio
            </a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? "/assets/closeIcon.png" : "/assets/menuIcon.png"}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#experience">Experiência</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </div>
        </nav>
    );
};