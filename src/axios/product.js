import instance from "./instance";

export const getAll = () => {
    const url = '/api/products'
    return instance.get(url)
}