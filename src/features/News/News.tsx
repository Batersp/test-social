import React from 'react';
import style from './News.module.css'
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {newsSelectors} from "./index";
import {SelectComponent} from "./SelectComponent/SelectComponent";
import {CategoryType} from "./newsTypes";
import {changeFilter} from "./news-reducer";
import {Item} from "./Item/Item";

export const News = () => {

    const dispatch = useAppDispatch()
    let filter = useAppSelector(newsSelectors.getFilter)
    const categories = useAppSelector(newsSelectors.getCategories)
    let news = useAppSelector(newsSelectors.getNews)
    if(filter !== 'All') {
        news = news.filter(el => el.category === filter)
    }
    const changeFilterHandler = (filter: CategoryType) => {
        dispatch(changeFilter({filter}))
    }

    return (

        <div className={style.container}>
            <div className={style.title}>News</div>
            <SelectComponent changeFilter={changeFilterHandler} filter={filter} categories={categories}/>
            {news.map(el => <Item key={el.id} post={el}/>)}
        </div>
    );
};

