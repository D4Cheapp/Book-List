import React from 'react';
import {BookForm} from "../../components";

function EditBookPage() {
    return (
        <BookForm isView={false} isEdit={true} isAdd={false}/>
    );
}

export default EditBookPage;