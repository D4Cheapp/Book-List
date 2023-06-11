import React from 'react';
import style from './CloseButton.module.scss';

//Кнопка закрытия формы
function CloseButton({onCloseClick}) {
    return (
        <button type='button' className={style.close} onClick={onCloseClick}/>
    );
}

export default CloseButton;