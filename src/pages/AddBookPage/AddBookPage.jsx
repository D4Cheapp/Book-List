import React from 'react';
import {BookForm} from "../../components";

function AddBookPage() {
    return (
        <BookForm isView={false} isEdit={false} isAdd={true}/>
    );
}

export default AddBookPage;