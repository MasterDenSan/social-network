export interface PaginationI {
    allItems: number
    countItems: number
    currentPage?: number
    onCangedPage: (page: number) => void
    pozitionSize?: number
}