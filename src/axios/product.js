import instance from "./instance";

export const getAll = (page) => {
    const currentPage = page ? page : 1
    const url = `/api/products?page=${currentPage}`
    return instance.get(url)
}

export const getByCategory = (data) => {
    const url = `api/products/category/${data}`
    return instance.get(url, data)
}