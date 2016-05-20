/**
 * Created by christianschulz1 on 20.05.16.
 */

// Ein Reducer empfängt 2 Sachen: Die Action (also die Info was passiert ist und eine Kopie des aktuellen states

function comments(state = [], action) { // das state = [] ist ein ES6 default Parameter
    console.log(state, action);
    return state;
}

export default comments;