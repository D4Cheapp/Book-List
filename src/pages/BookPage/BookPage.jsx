import React from 'react';
import {BookForm} from "../../components";

function BookPage() {
    return (
        <BookForm isView={true} isEdit={false} isAdd={false}/>
    );
}

export default BookPage;