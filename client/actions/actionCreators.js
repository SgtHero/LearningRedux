// actions können von diversen Punkten innerhalb der App ausgeführt werden und sind Objekte

// increment
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// add comment

export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// remove comment

export function removeComment(postId, i) {
    return {
        type: 'DELETE_COMMENT',
        postId,
        i
    }
}