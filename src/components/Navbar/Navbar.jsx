import React, { useState } from "react";
import styles from "./navbar.module.css";

const BASE_URL = import.meta.env.BASE_URL;

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
                    src={menuOpen ? `${BASE_URL}assets/closeIcon.png` : `${BASE_URL}assets/menuIcon.png`}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#experience">Jornada</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </div>
        </nav>
    );
};