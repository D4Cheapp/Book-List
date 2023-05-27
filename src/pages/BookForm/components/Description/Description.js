import React, {useEffect, useState} from 'react';
import style from './Description.module.scss';
import clsx from "clsx";

function Description({parentStyle, bookInfo, refs, type}) {
    const [description, setDescription] = useState();

    useEffect(() => {
        setDescription(bookInfo.description ? bookInfo.description : '')
    }, [bookInfo]);

    return (
        <label className={clsx(parentStyle.label, style.description)}>
            Описание

            <textarea className={style.input} ref={refs.descriptionRef}
                      disabled={!type} defaultValue={description} readOnly={!type}/>
        </label>
    );
}

export default Description;