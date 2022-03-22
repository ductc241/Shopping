import instance from "./instance";

export const createOrder = (data) => {
    const url = '/api/order'
    return instance.post(url, data)
}

export const getUserOrder = () => {
    const url = 'api/order/user'
    return instance.get(url)
}