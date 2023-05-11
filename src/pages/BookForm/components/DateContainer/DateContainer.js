import React, {useEffect, useState} from 'react';
import style from './DateContainer.module.scss';
import InputMask from "react-input-mask";
import {useSearchParams} from "react-router-dom";

//Контейнер для дат начала и конца прочтения книги
function DateContainer({refs, bookInfo, parentStyle}) {
    const type = useSearchParams()[0].get('type');

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
        setDateFromValue(bookInfo?.dateFrom);
        setDateToValue(bookInfo?.dateTo);
    },[bookInfo]);

    return (
        <div className={parentStyle.inputContainer}>
            <label className={style.label}>
                Дата начала чтения

                <InputMask className={style.input} mask='99.99.9999' placeholder='ДД.ММ.ГГГГ'
                       ref={refs.dateFromRef} onChange={onDateFromChange}
                           value={dateFromValue || ''} readOnly={!type}/>
            </label>

            <label className={style.label}>
                Дата прочтения

                <InputMask className={style.input} mask='99.99.9999' placeholder='ДД.ММ.ГГГГ'
                       ref={refs.dateToRef} onChange={onDateToChange} value={dateToValue || ''} readOnly={!type}/>
            </label>
        </div>
    );
}

export default DateContainer;