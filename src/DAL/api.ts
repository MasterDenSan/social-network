import * as axios from "axios";


const instance = axios.default.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "fccc3f30-27ba-4db7-b8a2-d8ca6a09a80c"}
});


//UsersAPI
export const usersAPI = {
    getUsers(currentPage = 1, countItems = 10) {
        return instance.get(`users?page=${currentPage}&count=${countItems}`)
            .then(response => response.data)
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(responce => responce.data.resultCode)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(responce => responce.data.resultCode)
    }
}

//ProfileAPI
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get("profile/" + userId)
    },
    getStatus(userId: number) {
        return instance.get("profile/status/" + userId)
    },
    updateStatus(userStatus:string) {
        return instance.put("profile/status/", {status: userStatus})
    },
    savePhoto(filePhoto: any) {
        let formData = new FormData();
        formData.append("image", filePhoto)
        return instance.put("profile/photo/", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: any) {
        return instance.put("profile", profile)
    }
}

// Header auth
export const authAPI = {
    getMeAuth() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const securutiAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url')
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









