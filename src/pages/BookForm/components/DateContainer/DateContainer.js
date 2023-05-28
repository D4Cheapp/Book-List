import React, {useContext, useEffect, useState} from 'react';
import InputMask from "react-input-mask";
import {BookFormContext} from "../../../../utils/bookFormContext";
import clsx from "clsx";

//Контейнер для дат начала и конца прочтения книги
function DateContainer() {
    const {bookInfo, refs, style, type, isDateFromError, isDateToError} = useContext(BookFormContext);

    const [dateFromValue, setDateFromValue] = useState('');
    const [dateToValue, setDateToValue] = useState('');

    function onDateFromChange(event) {
        setDateFromValue(event.value)
    }

    function onDateToChange(event) {
        setDateToValue(event.value)
    }

    //Изменение начальных значений дат
    useEffect(() => {
        setDateFromValue(bookInfo?.dateFrom ? bookInfo?.dateFrom : '');
        setDateToValue(bookInfo?.dateTo ? bookInfo?.dateTo : '');
    },[bookInfo]);

    return (
        <div className={style.inputContainer}>
            <label className={style.label}>
                Дата начала чтения

                <InputMask className={style.input} mask='99.99.9999' placeholder='ДД.ММ.ГГГГ' disabled={!type}
                       ref={refs.dateFromRef} onChange={onDateFromChange} value={dateFromValue} readOnly={!type}/>

                <p className={clsx(style.error, {[style.hiddenError]: !isDateFromError})}>
                    Дата введена неверно
                </p>
            </label>

            <label className={style.label}>
                Дата прочтения

                <InputMask className={style.input} mask='99.99.9999' placeholder='ДД.ММ.ГГГГ' disabled={!type}
                       ref={refs.dateToRef} onChange={onDateToChange} value={dateToValue} readOnly={!type}/>

                <p className={clsx(style.error, {[style.hiddenError]: !isDateToError})}>
                    Дата введена неверно
                </p>
            </label>
        </div>
    );
}

export default DateContainer;