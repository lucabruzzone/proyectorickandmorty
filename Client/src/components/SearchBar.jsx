import React from 'react';
import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value)
   }
   
   return (
      <div className={styles.search_box}>
         <input className={styles.input} type='text' placeholder='id' onChange={handleChange}/>
         <button className={styles.agregar} onClick={() => onSearch(id)}>＋</button>
      </div>
   );
}
