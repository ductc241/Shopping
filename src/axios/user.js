import instance from "./instance";

export const updateCart = (data) => {
    const url = `/api/users/${data.id}`
    return instance.put(url, {
        cart: data.cart
    })
}

export const getUserInfor = () => {
    const url = 'api/users/getInfor'
    return instance.get(url)
}