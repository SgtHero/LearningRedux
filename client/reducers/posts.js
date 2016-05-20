// Ein Reducer empfängt 2 Sachen: Die Action (also die Info was passiert ist und eine Kopie des aktuellen states

function posts(state = [], action) { // das state = [] ist ein ES6 default Parameter
    console.log("This post will hook up")
    console.log(state, action);
    return state;
}

export default posts;