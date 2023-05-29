import React, {useContext, useEffect, useState} from 'react';
import selfStyle from './Description.module.scss';
import {BookFormContext} from "../../../../utils/bookFormContext";
import clsx from "clsx";

function Description() {
    const {bookInfo, refs, isView, style} = useContext(BookFormContext);

    const [description, setDescription] = useState();

    useEffect(() => {
        setDescription(bookInfo.description ? bookInfo.description : '')
    }, [bookInfo]);

    return (
        <label className={clsx(style.label, selfStyle.description)}>
            Описание

            <textarea className={selfStyle.input} ref={refs.descriptionRef}
                      disabled={isView} defaultValue={description} readOnly={isView}/>
        </label>
    );
}

export default Description;