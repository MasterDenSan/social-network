const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS";

let initialState = {
    users: [
        {
            id: 1,
            name: "Dima",
            followed: false,
            status: "I'am King",
            country: "Russia",
            city: "Moscow",
            imgUrl: "https://i.pinimg.com/474x/d7/93/f7/d793f74bd7c7ce93405f3b221897e717.jpg"
        },
        {
            id: 2,
            name: "Sasha",
            followed: true,
            status: "I'am Kinggggggg",
            country: "Russia",
            city: "Moscow",
            imgUrl: "https://i.pinimg.com/474x/d7/93/f7/d793f74bd7c7ce93405f3b221897e717.jpg"
        },
        {
            id: 3,
            name: "Dima",
            followed: true,
            status: "I'am King",
            country: "Russia",
            city: "Moscow",
            imgUrl: "https://i.pinimg.com/474x/d7/93/f7/d793f74bd7c7ce93405f3b221897e717.jpg"
        }]
};


const userReduser = (state= initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
            ...state, users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u;
            })
        }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SETUSERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SETUSERS, users});


export default userReduser;