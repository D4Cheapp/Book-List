import React from 'react';
import style from './CloseButton.module.scss';
import {useNavigate} from "react-router-dom";

function CloseButton() {
    const navigate = useNavigate();

    return (
        <button type='button' className={style.close} onClick={() => navigate('/')}/>
    );
}

export default CloseButton;