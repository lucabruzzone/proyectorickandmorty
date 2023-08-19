import { useSelector } from "react-redux";
import Cards from "./Cards";

export default function Favorites() {
    const myFavorites = useSelector(state => state.myFavorites);

    return (
        <Cards characters={myFavorites} onClose={null}/>
    )
}