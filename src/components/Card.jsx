import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const DivCard = styled.div`
max-width: 315px;
background-color: #ffffff;
display: flex;
flex-direction: column;
border-radius: 10px;
overflow: hidden;
box-shadow: 5px 5px 15px #00000019;
&:hover{
   box-shadow: 5px 5px 15px #0000006c;
   background-color: rgba(179, 12, 12, 0.862);
   cursor: pointer;
}
`;

const SizeH3 = styled.h2`
font-size: 70%;
`;

const Imagen = styled.img`
object-fit: contain;
width: 100%;
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
   else {
      return (
         <DivCard key={id}>
            <Imagen src={image} alt='imagen' />
            <Button onClick={() => props.onClose(id)}>X</Button>
            <Link to={`/Detail/${id}`}>
               <SizeH3>{name}</SizeH3>
            </Link>
            <SizeH3>{gender}</SizeH3>
         </DivCard>
      );
   }
}
