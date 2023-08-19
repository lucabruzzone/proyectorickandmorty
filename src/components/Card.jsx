import React from 'react';
import styled from 'styled-components';
import styles from './Card.module.css';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFav, removeFav } from '../redux/actions';


const Imagen = styled.img`
object-fit: cover;
width: 100%;
transition: .5s;
&:hover{
   scale: 1.05;
   transition: .5s;
}
`;

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
   const { id, name, gender, image, species, status } = props.character;
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
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
   }

   useEffect(() => {
      console.log(myFavorites);
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   if (props.keyDetail) {
      return (
         <div key={id}>
            <h1>{name}</h1>
            <h2>Status | {status}</h2>
            <h2>Gender | {gender}</h2>
            <h2>Specie | {species}</h2>
            {/* <SizeH3>Planeta | {origin}</SizeH3> */}
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
            <div className={styles.divText}>
            <h2 className={styles.nameCharacter}>{name}</h2>
            <h2 className={styles.genderCharacter}>{gender}</h2>
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
            <div className={styles.divText} onClick={handleFavorite}>
            <h2 className={styles.nameCharacter}>{name}</h2>
            <h2 className={styles.genderCharacter}>{gender}</h2>
            </div>
         </div>
      );
   }
}
