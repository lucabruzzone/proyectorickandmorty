import { useSelector } from "react-redux";
import Cards from "./Cards";
import styles from './Favorites.module.css';

export default function Favorites() {
    const myFavorites = useSelector(state => state.myFavorites);

    return (
        <div className={styles.bigContainer}>
            <Cards characters={myFavorites} onClose={null}/>
        </div>
    )
}