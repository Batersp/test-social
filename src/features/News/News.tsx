import React from 'react';
import style from './News.module.css'
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {newsSelectors} from "./index";
import {SelectComponent} from "./SelectComponent/SelectComponent";
import {CategoryType} from "./newsTypes";
import {changeFilter} from "./news-reducer";
import {Item} from "./Item/Item";
import {authSelectors} from "../Auth";
import {Navigate} from "react-router-dom";
import {path} from "../../common/enums/path";

export const News = React.memo(() => {
    const dispatch = useAppDispatch()
    let filter = useAppSelector(newsSelectors.getFilter)
    const categories = useAppSelector(newsSelectors.getCategories)
    let news = useAppSelector(newsSelectors.getNews)
    if (filter !== 'All') {
        news = news.filter(el => el.category === filter)
    }
    const changeFilterHandler = (filter: CategoryType) => {
        dispatch(changeFilter({filter}))
    }

    const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn)


    if (!isLoggedIn) {
        return <Navigate to={path.LOGIN}/>
    }

    return (

        <div className={style.container}>
            <div className={style.title}>News</div>
            <SelectComponent changeFilter={changeFilterHandler} filter={filter} categories={categories}/>
            {news.map(el => <Item key={el.id} post={el}/>)}
        </div>
    );
});

