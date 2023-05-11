import {asyncGetBooks} from "./getRequests";
import {asyncDeleteBook} from "./postRequests";
import {asyncAddBook} from "./postRequests";
import {asyncEditBook} from "./postRequests";
import {asyncFilterBook} from "./getRequests";
import {asyncGetBookById} from "./getRequests";

export {asyncGetBooks,asyncEditBook, asyncAddBook,
    asyncDeleteBook, asyncFilterBook, asyncGetBookById};