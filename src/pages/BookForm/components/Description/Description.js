import React, {useContext, useEffect, useState} from 'react';
import selfStyle from './Description.module.scss';
import {BookFormContext} from "../../../../utils/bookFormContext";
import clsx from "clsx";

function Description() {
    const {bookInfo, refs, type, style} = useContext(BookFormContext);

    const [description, setDescription] = useState();

    useEffect(() => {
        setDescription(bookInfo.description ? bookInfo.description : '')
    }, [bookInfo]);

    return (
        <label className={clsx(style.label, selfStyle.description)}>
            Описание

            <textarea className={selfStyle.input} ref={refs.descriptionRef}
                      disabled={!type} defaultValue={description} readOnly={!type}/>
        </label>
    );
}

export default Description;