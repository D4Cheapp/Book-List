import React, {useState} from 'react';
import style from './BookTemplate.module.scss';
import clsx from "clsx";

import Pencil from '../../../images/edit-pencil.svg';
import ActivePencil from '../../../images/edit-pencil-active.svg';

import Lens from '../../../images/quick-view.svg';
import ActiveLens from '../../../images/quick-view-active.svg';
import {useNavigate} from "react-router-dom";

function BookTemplate({bookInfo}) {

    const navigate = useNavigate();

    const [isViewHover, setViewHover] = useState(false);
    const [isEditHover, setEditHover] = useState(false);

    return (
        <div className={style.book}>
            <div className={style.titleContainer}>
                <p className={style.title}>{bookInfo.title}</p>
            </div>

            <button className={clsx(style.button, style.edit)}
                    style={{backgroundImage: `url(${isEditHover ? ActivePencil : Pencil })`}} onClick={() =>
                        navigate(`/book/${bookInfo.id}/edit`)} onMouseEnter={() => setEditHover(true)}
                            onMouseLeave={() => setEditHover(false)}/>

            <button className={clsx(style.button, style.view)}
                    style={{backgroundImage: `url(${isViewHover ? ActiveLens : Lens})`}} onClick={() =>
                        navigate(`/book/${bookInfo.id}`)} onMouseEnter={() => setViewHover(true)}
                            onMouseLeave={() => setViewHover(false)}>
            </button>
        </div>
    );
}

export default BookTemplate;