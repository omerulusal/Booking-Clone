export const createError = (status, message) => {
    const failed = true
    const err = new Error('Not found')
    err.status = 404
    err.message = 'Not found'
}