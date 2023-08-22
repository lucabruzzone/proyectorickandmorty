import Card from './Card';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { orderCards, filterCards } from '../redux/actions';
import { useDispatch } from 'react-redux';
import styles from './Cards.module.css';

const DivCard = styled.div`
width: 100%;
/* display: flex;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap; */
display: grid;
grid-template-columns: repeat(
   auto-fit,
   minmax(
      250px,
      1fr
   )
); 
justify-items: center;
gap: 16px;
margin-top: 50px;
padding: 0 16px 50px 16px;
`;

const Section = styled.section`
width: 100%;
`;

const Selectors = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: 0 0 60px 0;
padding: 20px 16px;
background-color: #85858524;
`;

export default function Cards({characters, onClose}) {
   const [aux, setAux] = useState(false)
   const dispatch = useDispatch();
   
   function handleOrder(e) {
      dispatch(orderCards(e.target.value));
      /* console.log('funciona order'); */
      setAux(true);
   }

   function handleFilter(e) {
      dispatch(filterCards(e.target.value));
   }

   if (onClose) {
      return (
      <DivCard>
         {characters.map(character => {
            return <Card 
            character={character}
            onClose={onClose}
            />})}
      </DivCard>
      );
   }
   else {
      return (
         <Section>
            <Selectors>
               <select className={styles.selectBoxes} onChange={handleOrder} name="" id="">
                  <option value="SELECCIONE">Orden</option>
                  <option value="A">Ascendente</option>
                  <option value="B">Descendente</option>
               </select>
               <select className={styles.selectBoxes} onChange={handleFilter} name="" id="">
                  <option value="SELECCIONE">Género</option>
                  <option value="ALL">All</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Genderless">Genderless</option>
                  <option value="unknown">Unknown</option>
               </select>
            </Selectors>
            <DivCard>
               {characters.map(character => {
                  return <Card 
                  character={character}
                  onClose={onClose}
                  />})}
            </DivCard>
         </Section>
         );
   }
}
