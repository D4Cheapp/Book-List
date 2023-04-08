import React from 'react';
import style from './BookForm.module.scss';
import {FormAdd, FormEdit, FormView} from "./components";

function BookForm({formState, setFormState}) {

    return (
        <>{
            formState[0] !== 'hide' &&

            <form className={style.form} onSubmit={(event) => event.preventDefault()}>

                {
                    formState[0] === 'add' ?
                        <FormAdd setFormState={setFormState}/>
                    : formState[0] === 'edit' ?
                        <FormEdit bookInfo={formState[1]} setFormState={setFormState}/>
                    :
                        <FormView bookInfo={formState[1]}/>
                }

                <button className={style.close} onClick={() => setFormState(['hide', null])}/>
            </form>
        }</>
    );
}

export default BookForm;