export type InitNewsType = {
    news: NewsType[]
    categories: CategoriesType
    filter: CategoryType

}

export type NewsType = {
    category: CategoryType
    message: string
    id: string
    title: string
}
export type CategoryType =  'All' | 'Sport' | 'Culture' | 'Movie' | 'Beauty'
export type CategoriesType = CategoryType[]