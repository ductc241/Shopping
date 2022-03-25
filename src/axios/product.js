import instance from "./instance";

export const getAll = (page) => {
    const currentPage = page ? page : 1
    const url = `/api/products?page=${currentPage}`
    return instance.get(url)
}