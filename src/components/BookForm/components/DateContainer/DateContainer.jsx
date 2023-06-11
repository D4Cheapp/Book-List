import React from 'react';
import InputMask from "react-input-mask";
import style from '../../BookForm.module.scss';
import clsx from "clsx";

//Контейнер для дат начала и конца прочтения книги
function DateContainer({onDateFromChange, onDateToChange, dateFromValue,
                           dateToValue, isReadonly, isDateFromError, isDateToError}) {
    return (
        <div className={style.inputContainer}>
            <label className={style.label}>
                Дата начала чтения

                <InputMask className={style.input} mask='99.99.9999' placeholder='ДД.ММ.ГГГГ' disabled={isReadonly}
                       onChange={onDateFromChange} value={dateFromValue} readOnly={isReadonly}/>

                <p className={clsx(style.error, {[style.hiddenError]: !isDateFromError})}>
                    Дата введена неверно
                </p>
            </label>

            <label className={style.label}>
                Дата прочтения

                <InputMask className={style.input} mask='99.99.9999' placeholder='ДД.ММ.ГГГГ' disabled={isReadonly}
                       onChange={onDateToChange} value={dateToValue} readOnly={isReadonly}/>

                <p className={clsx(style.error, {[style.hiddenError]: !isDateToError})}>
                    Дата введена неверно
                </p>
            </label>
        </div>
    );
}

export default DateContainer;