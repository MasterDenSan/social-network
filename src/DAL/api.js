import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "aa2b0c24-e339-4c64-a570-1572182c2672"}
});


//UsersAPI
export const usersAPI = {
    getUsers(currentPage = 1, countItems = 10) {
        return instance.get(`users?page=${currentPage}&count=${countItems}`)
            .then(response => response.data)
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(responce => responce.data.resultCode)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(responce => responce.data.resultCode)
    }
}

//ProfileAPI
export const profileAPI = {
    getProfile(userId) {
        return instance.get("profile/" + userId)
            .then(response => response.data)
    }
}

// Header auth
export const authAPI = {
    getMeAuth() {
        return        instance.get(`auth/me`)
            .then(response => {
                if(response.data.resultCode === 0) {
                    return  response.data.data;
                    }
            })
    }
}


/*
axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
    withCredentials: true,
    headers: {
        "API-KEY": "aa2b0c24-e339-4c64-a570-1572182c2672"
    }
})
*/









