import React from 'react';
import style from './FormButtons.module.scss';

//Кнопки для удаления, сохранения и добавления книг
function FormButtons({withDeleteButton, submitButtonTitle, onFormSubmit, onDeleteClick}) {
    return (
        <div className={style.buttonContainer}>
            <button type='button' className={style.add} onClick={onFormSubmit}>
                {submitButtonTitle}
            </button>

            {withDeleteButton &&
                <button className={style.delete} type='button' onClick={onDeleteClick}>
                    Удалить
                </button>
            }
        </div>
    );
}

export default FormButtons;