import styles from './About.module.css';
import js from '../img/bxl-javascript.svg';
import html from '../img/bxl-html5.svg';
import css from '../img/bxl-css3.svg';
import react from '../img/bxl-react.svg';
import redux from '../img/bxl-redux.svg';
import express from '../img/express.svg';

export default function About() {
    return (
        <div className={styles.bigContainer}>
            <div className={styles.aboutCard}>
                <div className={styles.titulo}>
                    Web developer | full stack <span>Student</span>
                </div>
                <ul className={styles.lista}>
                    <li><img src={js} alt="" />Javascript </li>
                    <li><img src={html} alt="" />HTML </li>
                    <li><img src={css} alt="" />CSS </li>
                    <li><img src={react} alt="" />React </li>
                    <li><img src={redux} alt="" />Redux </li>
                    <li><img src={express} alt="" />Express </li>
                </ul>
                <div className={styles.textBottom}>
                    My name is <span>Luca Bruzzone</span>, and I am student of the <span>full stack</span> program at <span>Henry</span>, and this is my <span>Integration Proyect</span> from <span>Module 2</span>. 
                </div>
            </div>
        </div>
    )
}