import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';


function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const email = 'luca.bruzzone95@gmail.com';
   const password = 'holichao123';
   const [character, setCharacter] = useState({});
   const [characters, setCharacters] = useState([]);

   function login(userData) {
      if (userData.username === email && userData.password === password) {
         setAccess(true);
         navigate('/home');
      }
      else alert('Usuario o contraseña inválida');
   }

   /* useEffect(() => {
      !access && navigate('/');
   }, [access]); */

   function onClose(id){
      const charactersFiltrados = characters.filter(character => character.id !== id);
      setCharacters(charactersFiltrados);
   }

   function onSearch(id, string = 'all') { 
      axios(`https://rickandmortyapi.com/api/character/${id}`).then((res) => res.data).then((data) => {
         if(data.name) {
            if(string !== 'all') {
               setCharacter(data);
               console.log(character)
            }
            else setCharacters([...characters, data]);
         }
         else window.alert(`No se encontró el personaje con el id: ${id}`)
      }).catch(error => {
         window.alert(error.response.data.error);
      })
   }
   
   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/Home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Detail/:id" element={<Detail character={character} onSearch={onSearch}/>}/>
         </Routes>
      </div>
   );
}

export default App;
