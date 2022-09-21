import {AppRootStateType} from "../../utils/types";
import {CategoryType, NewsType} from "./newsTypes";

export const getNews = (state: AppRootStateType): NewsType[] => state.news.news
export const getCategories = (state: AppRootStateType): CategoryType[] => state.news.categories
export const getFilter = (state: AppRootStateType): CategoryType => state.news.filter