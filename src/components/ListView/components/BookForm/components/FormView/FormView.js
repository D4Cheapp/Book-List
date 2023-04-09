import React from 'react';
import style from './FormView.module.scss';

function FormView({bookInfo}) {
    return (
        <>
            <div>
                <p>
                    Название
                </p>

                <p>
                    {bookInfo.title}
                </p>
            </div>


            <div>
                <p>
                    Описание
                </p>

                <p>
                    {bookInfo.description ? bookInfo.description : '—'}
                </p>
            </div>

            <div>
                <p>
                    Дата начала чтения
                </p>

                <p>
                    {bookInfo.dateFrom ? bookInfo.dateFrom : '—'}
                </p>
            </div>

            <div>
                <p>
                    Дата окончания чтения
                </p>

                <p>
                    {bookInfo.dateTo ? bookInfo.dateTo : '—'}
                </p>
            </div>
        </>
    );
}

export default FormView;