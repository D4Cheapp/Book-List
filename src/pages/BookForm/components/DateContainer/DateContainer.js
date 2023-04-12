import React, {useState} from 'react';
import style from './DateContainer.module.scss';
import InputMask from "react-input-mask";
import {useSearchParams} from "react-router-dom";

function DateContainer({refs, bookInfo}) {
    const type = useSearchParams()[0].get('type');

    const [inputValue, setInputValue] = useState();

    function onInputChange(event) {
        setInputValue(event.value)
    }

    return (
        <div className={style.date}>
            <label className={style.label}>
                Дата начала чтения

                <InputMask className={style.input} mask='99.99.9999' placeholder='ДД.ММ.ГГГГ'
                       ref={refs.dateFromRef} onChange={onInputChange} value={inputValue}
                           defaultValue={bookInfo ? bookInfo.dateFrom : ''} readOnly={!type}/>
            </label>

            <label className={style.label}>
                Дата прочтения

                <InputMask className={style.input} mask='99.99.9999' placeholder='ДД.ММ.ГГГГ'
                       ref={refs.dateToRef} onChange={onInputChange} value={inputValue}
                           defaultValue={bookInfo ? bookInfo.dateTo : ''} readOnly={!type}/>
            </label>
        </div>
    );
}

export default DateContainer;