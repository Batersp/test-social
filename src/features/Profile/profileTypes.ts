export type ProfileInitialStateType = {
    profile: ProfileType
    posts: PostType[]
}

export type ProfileType = {
    password?: string
    name: string
    photo: string
    status: string
}

export type PostType = {
    id: string
    message: string
    likeCounts: number
}