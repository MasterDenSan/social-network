export const objectChangeToArray = (
    item: any[],
    arrayItem: string,
    itemId: number,
    newArray: any
) => {
    return item.map(u => {
        if (u[arrayItem] === itemId) {
            return {...u, ...newArray}
        }
        return u;
    })
}