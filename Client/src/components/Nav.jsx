import React from "react";
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';
import {NavLink, useLocation} from 'react-router-dom';

function Nav({onSearch, onCloseAll}) {
    const {pathname} = useLocation();

    function handleRandom() {
        const randomNumber = Math.floor(Math.random() * 827) + 1;
        onSearch(randomNumber);
    }

    return (
        <div className={styles.navGeneral}>
            <div className={styles.nav}>
                <h1 className={styles.titulo}>Rick and Morty</h1>
                <NavLink to='/About'>
                    <button className={pathname === '/About' ? styles.buttonOn: styles.button} id={styles.about}>About</button>
                </NavLink>
                <NavLink to='/home'>
                    <button className={pathname === '/home' ? styles.buttonOn: styles.button} id={styles.home}>Home</button>
                </NavLink>
                <NavLink to='/Favorites'>
                    <button className={pathname === '/Favorites' ? styles.buttonOn: styles.button} id={styles.home}>Favorites</button>
                </NavLink>
                    <button className={styles.button} id={styles.random} onClick={handleRandom}>Random</button>
                    <button className={styles.button} id={styles.random} onClick={onCloseAll}>Delete All</button>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    );
}

export default Nav;