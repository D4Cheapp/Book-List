function jsonServerReducer(state = undefined, action){

    switch (action.type){
        case 'ASYNC_SERVER_ADD':{
            return action.books;
        }
    }
}

export default jsonServerReducer;