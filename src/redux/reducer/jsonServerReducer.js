function jsonServerReducer(state = undefined, action){

    switch (action.type){
        case 'ASYNC_SERVER_REQUEST':{
            return action.books;
        }

        case 'ASYNC_FILTER_BOOK':{
            return action.filteredBooks;
        }
    }
}

export default jsonServerReducer;