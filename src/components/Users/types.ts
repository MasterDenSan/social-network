export type UserType = {
    user?: any
    follow: (id: number) => void
    unfollow: (id: number) => void
    isProcessingArr: []
}

export type onlyUser = {
    id: number
    photos: any
    name: string
    status: string
    followed: boolean
}

export interface UsersI extends UserType {
    allItems: number
    countItems: number
    currentPage: number
    onCangedPage: (page: number) => void
    pozitionSize: number
    users: onlyUser[]
}

export interface IUsersComponentAPI {
    requestUsers:(currentPage: number, countItems: number) => void
    currentPage: number
    countItems: number
    setCurrentPage: (page: number) => void
    isProgresing: boolean
    allItems: number
    users: onlyUser[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    isProcessingArr: []
    pozitionSize: number
}