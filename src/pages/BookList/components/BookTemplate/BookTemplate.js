import React, {useState} from 'react';
import style from './BookTemplate.module.scss';
import clsx from "clsx";

import Pencil from '../../../../images/edit-pencil.svg';
import ActivePencil from '../../../../images/edit-pencil-active.svg';

import Lens from '../../../../images/quick-view.svg';
import ActiveLens from '../../../../images/quick-view-active.svg';
import {useNavigate} from "react-router-dom";

function BookTemplate({bookInfo, loading}) {

    const navigate = useNavigate();

    const [isViewHover, setViewHover] = useState(false);
    const [isEditHover, setEditHover] = useState(false);

    return (
        <div className={style.book}>
            {loading ?
            <>
                <div className={clsx(style.titleContainer, style.titleLoading)}/>

                <button className={clsx(style.button, style.buttonLoading)}/>
                <button className={clsx(style.button, style.buttonLoading)}/>
            </>
            :
            <>
                <div className={style.titleContainer}>
                    <p className={style.title}>{bookInfo.title}</p>
                </div>

                {/*Кнопка редактирования*/}
                <button className={clsx(style.button, style.edit)}
                    style={{backgroundImage: `url(${isEditHover ? ActivePencil : Pencil })`}}
                        onClick={() => navigate({pathname: `/book/${bookInfo.id}/`, search: `type=edit`,})}
                            onMouseEnter={() => setEditHover(true)}
                                onMouseLeave={() => setEditHover(false)}/>

                {/*Кнопка быстрого просмотра*/}
                <button className={clsx(style.button, style.view)}
                    style={{backgroundImage: `url(${isViewHover ? ActiveLens : Lens})`}}
                        onClick={() => navigate(`/book/${bookInfo.id}`)}
                            onMouseEnter={() => setViewHover(true)}
                                onMouseLeave={() => setViewHover(false)}/>
            </>
            }

        </div>
    );
}

export default BookTemplate;