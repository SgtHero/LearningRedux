/**
 * Created by christianschulz1 on 20.05.16.
 */

// Ein Reducer empfängt 2 Sachen: Die Action (also die Info was passiert ist und eine Kopie des aktuellen states

function postComments(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ];
        default:
            return state;
    }
    return state;
}

function comments(state = [], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            ...state,
        [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;