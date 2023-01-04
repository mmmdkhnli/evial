const Request = async (url, options = [], data = false) => {
    const params = {
        ...options,
    }

    if (data) params.body = JSON.stringify(data)

    const response = await fetch(url, params)
    const parsedData = await response.json()

    return parsedData
}

export default Request

export const post = (url, options, data) => Request(url, options, data)
export const get = (url, options) => Request(url, options)