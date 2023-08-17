import Card from './Card';
import React from 'react';
import styled from 'styled-components';

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
padding: 0 16px 16px 16px;
`;

export default function Cards({characters, onClose}) {
   return (
   <DivCard>
      {characters.map(character => {
         return <Card 
         character={character}
         onClose={onClose}
         /* onSelect={() => window.alert('Emulamos que seleccionamos la card')} *//>})}
   </DivCard>
   );
}
