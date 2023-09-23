import axios from "axios";

/* export const addFav = (character) => {
    return {type: "ADD_FAV", payload: character}
} */

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
                type: 'ADD_FAV',
                payload: data,
            });
        });
    };
};

/* export const removeFav = (id) => {
    return {type: "REMOVE_FAV", payload: id}
} */

export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return (dispatch) => {
        axios.delete(endpoint).then(({ data }) => {
            return dispatch({
                type: 'REMOVE_FAV',
                payload: data,
            });
        });
    };
};

export const filterCards = (gender) => {
    return {type: "FILTER", payload: gender}
}

export const orderCards = (orden) => {
    return {type: "ORDER", payload: orden}
}

export const removeAllFav = () => {
    return {type: "REMOVE_ALL_FAV"}
}
