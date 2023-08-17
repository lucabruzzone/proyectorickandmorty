import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import styles from './Detail.module.css';
import Card from './Card';

export default function Detail() {
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(
            ({data}) => {
                if(!data.name) {
                    window.alert(`No se encontró el personaje con el id: ${id}`);
                }
                else setCharacter(data)
            }
        )
    }, [id]);

    if(character) 
    console.log(character)
        return (
            <div className={styles.detailContainer}>
                <div className={styles.detaildata}>
                    <Card character={character} keyDetail={true}/>
                    {/* <h1>{character.name}</h1>
                    <h2>Status | {character.status}</h2>
                    <h2>Gender | {character.gender}</h2>
                    <h2>Specie | {character.species}</h2>
                    <h2>Origin | {character.origin.name}</h2> */}
                </div>
                <div className={styles.detailimg}>
                    <img src={character.image} alt="" />
                </div>
            </div>
        )
}