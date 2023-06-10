import React from 'react';
import style from './CloseButton.module.scss';
import {useNavigate} from "react-router-dom";

//Кнопка закрытия формы
function CloseButton() {
    const navigate = useNavigate();

    function onCloseClick() {
        navigate('/');
    }

    return (
        <button type='button' className={style.close} onClick={onCloseClick}/>
    );
}

export default CloseButton;