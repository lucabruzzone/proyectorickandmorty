import React from 'react';
import styled from 'styled-components';
import styles from './Card.module.css';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFav, removeFav } from '../redux/actions';


const Button = styled.button`
position: absolute;
border: none;
border-radius: 10px 0 0 0;
&:hover{
   background-color: rgba(179, 12, 12, 0.862);
   cursor: pointer;
}
`;

export default function Card(props) {
   const { id, name, gender, image, species, status, origin, episode } = props.character;
   const dispatch = useDispatch();
   const allCharacters = useSelector(state => state.allCharacters);
   const [isFav, setIsFav] = useState(false);

   function handleFavorite() {
      if(isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      }
      else {
         setIsFav(true);
         dispatch(addFav(props.character));
      }
      console.log(isFav);
   }

   useEffect(() => {
      allCharacters.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [allCharacters]);

   if (props.keyDetail) {
      return (
         <div key={id}>
            {origin ? (
               <div className={styles.datosDetail}>
                  <h1>{name}</h1>
                  <h2>Status | {status}</h2>
                  <h2>Gender | {gender}</h2>
                  <h2>Specie | {species}</h2>
                  <h2>Planeta | {origin.name}</h2>
                  <div className={styles.episodios}>
                     <h2>Episodios:</h2>
                     {episode.map(epi => {
                        const num = Number(epi.split('/').at(-1));
                        return <h4 className={styles.episodio}>{num}</h4>;
                     })}
                  </div>
               </div>
            ) : (
               <div><h1>Loading...</h1></div>
            )}
         </div>
      );
   }
   if (!props.onClose) {
      return (
         <div className={styles.favSelected} key={id}>
            <Link className={styles.imgContainer} to={`/Detail/${id}`}>
               <img className={isFav ? styles.imgStatic : styles.img} src={image} alt='imagen'/>
            </Link>
            <Button onClick={handleFavorite}>X</Button>
            <div className={styles.divTextContainer}>
               <div className={styles.divText}>
                  <h2 className={styles.nameCharacter}>{name}</h2>
                  <p className={styles.genderCharacter}>{gender}</p>
               </div>
               <div className={styles.divText} id={styles.textRight}>
                  <p>{species}</p>
                  <p>{id}</p>
               </div>
            </div>
         </div>
      );
   }

   else {
      return (
         <div className={isFav ? styles.favSelected : styles.fav} key={id}>
            <Link className={styles.imgContainer} to={`/Detail/${id}`}>
               <img className={isFav ? styles.imgStatic : styles.img} src={image} alt='imagen'/>
            </Link>
            <Button onClick={() => props.onClose(id)}>X</Button>
            <div className={styles.divTextContainer} onClick={handleFavorite}>
               <div className={styles.divText}>
                  <h2 className={styles.nameCharacter}>{name}</h2>
                  <p className={styles.genderCharacter}>{gender}</p>
               </div>
               <div className={styles.divText} id={styles.textRight}>
                  <p>{species}</p>
                  <p>{id}</p>
               </div>
            </div>
         </div>
      );
   }
}
