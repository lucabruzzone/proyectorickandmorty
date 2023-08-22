
const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAV":
            console.log(state)
            state = {...state, allCharacters: [...state.allCharacters, action.payload]};
            state = {...state, myFavorites: [...state.myFavorites, action.payload]};
            return state;

        case "REMOVE_FAV":
            state = {...state, myFavorites: state.myFavorites.filter((char) => char.id !== Number(action.payload))};
            state = {...state, allCharacters: state.myFavorites};
            return state;

        case 'FILTER':
            if(action.payload === 'ALL') state = {...state, myFavorites: state.allCharacters};
            else if(action.payload === 'SELECCIONE') state = {...state};
            else state = {...state, myFavorites: state.allCharacters.filter((char) => char.gender === action.payload)};
            return state;

        case "ORDER":
            let ordered = state.myFavorites.slice().sort((a, b) => {return a.id - b.id});
            if(action.payload === 'B') ordered.reverse();
            if(action.payload === 'SELECCIONE') return state;
            return {...state, myFavorites: ordered};

        default:
            return {...state};
    }
};

export default rootReducer;
