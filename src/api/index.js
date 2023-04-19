import {asyncGetBooks} from "./getRequests";
import {asyncDeleteBook} from "./postRequests";
import {asyncAddBook} from "./postRequests";
import {asyncEditBook} from "./postRequests";
import {asyncFilterBook} from "./getRequests";
import {filterUpdate} from "../redux/actions/actions";
import {asyncGetBookById} from "./getRequests";

export {asyncGetBooks,asyncEditBook, asyncAddBook,
    asyncDeleteBook, asyncFilterBook, filterUpdate, asyncGetBookById};