import React, {useEffect} from 'react';
import style from './ListView.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./Header";
import {useNavigate} from "react-router-dom";
import {BookTemplate} from "./BookTemplate";
import {updateBooks} from "../../redux/actions";
import clsx from "clsx";

function ListView() {
    const state = useSelector(state => state);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(updateBooks())
    }, []);

    return (
        <section className={style.listContainer}>
            <Header/>

            <div className={clsx(style.bookContainer, {[style.bookContainerLoading]: !state})}>
                {state ?
                    <>
                        {state.map(book => <BookTemplate key={book.id} bookInfo={book}/>)}
                    </>
                    :
                    <>
                        {[...Array(7)].map((book, index) => <BookTemplate key={index} loading={true}/>)}
                    </>
                }
            </div>


            <div className={style.buttonContainer}>
                <button className={style.addButton} onClick={() => navigate({
                    pathname: '/book/',
                    search: `type=add`,
                })}/>
            </div>
        </section>
    );
}

export default ListView;