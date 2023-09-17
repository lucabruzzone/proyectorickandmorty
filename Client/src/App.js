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
import Favorites from './components/Favorites';
import { useDispatch, useSelector } from 'react-redux';
import { removeFav } from './redux/actions';


function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const email = 'luca.bruzzone95@gmail.com';
   const password = '12345678';
   const [character, setCharacter] = useState({});
   const [characters, setCharacters] = useState([]);
   const [copias, setCopias] = useState([]);
   const dispatch = useDispatch();

   function login(userData) {
      if (userData.username === email && userData.password === password) {
         setAccess(true);
         navigate('/Home');
      }
      else alert('Usuario o contraseña inválida');
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onClose(id){
      const charactersFiltrados = characters.filter(character => character.id !== id);
      setCharacters(charactersFiltrados);
      setCopias([copias.filter(charId => charId !== id)]);
      dispatch(removeFav(id));
   }

   /* axios(`https://rickandmortyapi.com/api/character/${id}`) */
   function onSearch(id, string = 'all') { 
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({data}) => {
         if(data) {
            if(string !== 'all') {
               setCharacter(data);
            }
            else {
               if(!copias.includes(id)) {
                  setCopias([...copias, id]);
                  setCharacters([...characters, data]);
               }
               else alert('El personaje ya fue agregado');
            }
         }
         else window.alert(`No se encontró el personaje con el id: ${id}`)
      }).catch(error => {
         window.alert(error);
      })
   }
   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/Home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/Favorites' element={<Favorites/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Detail/:id" element={<Detail character={character} onSearch={onSearch}/>}/>
         </Routes>
      </div>
   );
}

export default App;
