import React from 'react';
import style from '../../BookForm.module.scss';
import selfStyle from './Description.module.scss';
import clsx from "clsx";

function Description({descriptionValue, isReadonly, onDescriptionChange}) {
    return (
        <label className={clsx(style.label, selfStyle.description)}>
            Описание

            <textarea className={selfStyle.input} disabled={isReadonly} onInput={onDescriptionChange}
                  defaultValue={descriptionValue} readOnly={isReadonly}/>
        </label>
    );
}

export default Description;