function jsonServerReducer(state = undefined, action){

    switch (action.type){
        case 'ASYNC_SERVER_REQUEST':{
            return action.books;
        }

        case 'ASYNC_FILTER_BOOKS':{
            return action.filteredBooks;
        }

        case 'ASYNC_GET_BOOK':{
            return action.book;
        }
        
        default:{
            return state
        }
    }
}

export default jsonServerReducer;