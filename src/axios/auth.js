import instance from "./instance";

export const login = (userInfor) => {
    const url = 'auth/login'
    return instance.post(url, userInfor)
}

export const UserRegister = (userInfor) => {
    const url = 'auth/register'
    return instance.post(url, userInfor)
}