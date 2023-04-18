import React, {useEffect} from 'react';
import style from './ListView.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./Header";
import {useNavigate} from "react-router-dom";
import {BookTemplate} from "./BookTemplate";
import {updateBooks} from "../../redux/actions";

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

            {state ?
                <div className={style.bookContainer}>
                    {state.map(book => <BookTemplate key={book.id} bookInfo={book}/>)}
                </div>
                :
                <div>
                    Loading...
                </div>
            }


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