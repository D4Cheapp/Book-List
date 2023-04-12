import React from 'react';
import style from './CloseButton.module.scss';

function CloseButton({setFormState}) {
    return (
        <button type='button' className={style.close} onClick={() => setFormState(['hide', null])}/>
    );
}

export default CloseButton;