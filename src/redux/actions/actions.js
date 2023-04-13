function addBook(bookInfo) {
    return {type: 'ADD', bookInfo: bookInfo};
}

function editBook(bookInfo) {
    return {type: 'EDIT', bookInfo: bookInfo};
}


function deleteBookAction(bookInfo) {
    return {type: 'DELETE', id: bookInfo}
}

export {addBook, editBook, deleteBookAction}