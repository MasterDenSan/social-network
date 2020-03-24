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
    unfollow(id) {
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
    },
    getStatus(userId) {
        return instance.get("profile/status/" + userId)
    },
    updateStatus(userStatus) {
        return instance.put("profile/status/", {status: userStatus})
    }
}

// Header auth
export const authAPI = {
    getMeAuth() {
        return instance.get(`auth/me`)
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









