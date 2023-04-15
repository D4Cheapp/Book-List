function jsonServerReducer(state = undefined, action){

    switch (action.type){
        case 'ADD':{
            return [...state, action.bookInfo];
        }

        case 'ASYNC_SERVER_ADD':{
            return action.books;
        }

        case 'UPDATE_BOOKS':{
            return state;
        }

        case 'DELETE':{
            return state.filter(book => book.id !== action.id);
        }

        case 'EDIT':{
            return state.map(book => {
                if (book.id === action.bookInfo.id){
                    return {
                        ...book,
                        title: action.bookInfo.title,
                        description: action.bookInfo.description,
                        dateFrom: action.bookInfo.dateFrom,
                        dateTo: action.bookInfo.dateTo
                    };
                }
                return book;
            });
        }

        default:{
            return state
        }
    }
}

export default jsonServerReducer;