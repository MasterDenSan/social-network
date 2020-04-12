export const objectChangeToArray = (item, arrayItem, itemId, newArray) => {
    return item.map(u => {
        if (u[arrayItem] === itemId) {
            return {...u, ...newArray}
        }
        return u;
    })
}