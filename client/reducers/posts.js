// Ein Reducer empfängt 2 Sachen: Die Action (also die Info was passiert ist und eine Kopie des aktuellen states

function posts(state = [], action) { // das state = [] ist ein ES6 default Parameter
    switch(action.type) {
        case 'INCREMENT_LIKES' :
            console.log("Like erhöht");
            const i = action.index;
            return [
                ...state.slice(0,i),
                {...state[i], likes: state[i].likes +1},
                ...state.slice(i + 1),
            ]
        default:
            return state;
    }
}

export default posts;