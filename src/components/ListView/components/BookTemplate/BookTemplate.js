import React from 'react';
import style from './BookTemplate.module.scss';
import Pencil from '../../../../images/edit-pencil.svg';
import Lens from '../../../../images/quick-view.svg';

function BookTemplate({bookInfo, setFormState}) {
    return (
        <div className={style.book}>
            <div className={style.titleContainer}>
                <p className={style.title}>{bookInfo.title}</p>
            </div>

            <button className={style.button} style={{backgroundImage: `url(${Pencil})`}}
                onClick={() => setFormState(['edit', bookInfo])}/>

            <button className={style.button} style={{backgroundImage: `url(${Lens})`}}
                    onClick={() => setFormState(['view', bookInfo])}/>
        </div>
    );
}

export default BookTemplate;