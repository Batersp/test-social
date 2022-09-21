import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CategoryType, InitNewsType, NewsType} from "./newsTypes";


const initState: InitNewsType = {
    news: [
        {
            id: '1',
            category: 'Sport',
            title: 'Arsenal',
            message: 'Arsenal\'s Ethan Nwaneri became the youngest ever Premier League player aged 15 years and 181 days as the Gunners defeated Brentford to return to the top of the table.'
        },
        {
            id: '2',
            category: 'Culture',
            title: 'Musical Heritage',
            message: 'Qatar’s Rich Musical Heritage Embraces Influences From Around The Globe'
        },
        {
            id: '3',
            category: 'Sport',
            title: 'Everton',
            message: 'Neal Maupay opened his account for Everton to earn their first Premier League win of the season with victory over West Ham at Goodison Park.'
        },
        {
            id: '4',
            category: 'Movie',
            title: 'Percy Jackson',
            message: 'Percy Jackson breakout star Walker Scobell becomes Robin in The Batman 2 fan art giving Robert Pattinson his own boy wonder for the sequel.'
        },
        {
            id: '5',
            category: 'Beauty',
            title: 'Beautyexpo',
            message: 'Beautyexpo & Cosmobeauté Malaysia to be held next week in Kuala Lumpur'
        },
        {
            id: '6',
            category: 'Beauty',
            title: 'NewYork IT Awards 2022',
            message: 'Who are the winners of the MakeUp in NewYork IT Awards 2022?'
        },
        {
            id: '7',
            category: 'Sport',
            title: 'Everton and West Ham',
            message: 'Everton and West Ham started the day level on points near the bottom of the Premier League, but the mood has been dramatically altered around both clubs by the Toffees\' 1-0 win.'
        },
        {
            id: '8',
            category: 'Sport',
            title: 'Jack Grealish',
            message: 'Jack Grealish could not have asked for a better response to his growing band of critics.'
        },
        {
            id: '9',
            category: 'Movie',
            title: 'Black Adam',
            message: 'A new Black Adam trailer gives the first proper look at Pierce Brosnan in his Doctor Fate costume for the upcoming DC Extended Universe movie.'
        },
        {
            id: '10',
            category: 'Sport',
            title: 'Alexander Isak',
            message: 'Alexander Isak scored his first goal at St James\' Park but Newcastle remain without a win since the opening day of the Premier League season after being held by a disciplined Bournemouth.'
        },
        {
            id: '11',
            category: 'Culture',
            title: 'Hong Kong Embraces Art',
            message: 'Hong Kong Embraces Art To Enrich Quality of Life'
        }
    ],
    categories: ['Beauty', 'Culture', 'Movie', 'Sport', 'All'],
    filter: 'All'
}

export const slice = createSlice({
    name: 'news',
    initialState: initState,
    reducers: {
        addNews(state, action: PayloadAction<{ value: NewsType }>) {
            state.news.unshift(action.payload.value)
        },
        changeFilter(state, action: PayloadAction<{ filter: CategoryType }>) {
            state.filter = action.payload.filter
        },
    }
})

export const {addNews, changeFilter} = slice.actions
