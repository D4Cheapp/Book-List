import React from 'react';
import style from './FormView.module.scss';

function FormView({bookInfo}) {
    return (
        <>
            <p>
                {bookInfo.title}
            </p>

            <p>
                {bookInfo.description}
            </p>

            <p>
                {bookInfo.date}
            </p>
        </>
    );
}

export default FormView;