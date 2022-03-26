import instance from "./instance";

export const getAll = () => {
    const url = '/api/category'
    return instance.get(url)
}
