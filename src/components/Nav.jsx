import React from "react";
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';
import {NavLink} from 'react-router-dom';

function Nav({onSearch}) {
    return (
        <div className={styles.navGeneral}>
            <div className={styles.nav}>
                <h1 className={styles.titulo}>Rick and Morty</h1>
                <NavLink to='/About'>
                <button>About</button>
                </NavLink>
                <NavLink to='/Home'>
                <button>Home</button>
                </NavLink>
                <SearchBar onSearch={onSearch}/>
            </div>
        </div>
    );
}

export default Nav;