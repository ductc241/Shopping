import instance from "./instance";

export const updateCart = () => {
    const url = '/api/products'
    return instance.post(url)
}

export const getUserInfor = () => {
    const url = 'api/users/getInfor'
    return instance.get(url)
}