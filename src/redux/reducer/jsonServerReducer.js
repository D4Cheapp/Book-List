function initialState(){
    if (!localStorage.getItem('bookList')) {
        localStorage.setItem('bookList','[]');
    }

    return  JSON.parse(localStorage.getItem('bookList'));
}

function jsonServerReducer(state = initialState(), action){
    let newStorage = Array.from(state);

    switch (action.type){
        case 'ADD':{
            newStorage.push(action.bookInfo);
            break;
        }

        case 'DELETE':{
            newStorage = newStorage.filter(book => book.id !== action.id);
            break;
        }

        case 'EDIT':{
            newStorage = newStorage.map(book => {
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
            break;
        }
    }

    localStorage.setItem('bookList', JSON.stringify(newStorage));
    return newStorage;
}

export default jsonServerReducer;