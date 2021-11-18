import { errorReturn, successfulReturn } from "./responseObj"

export const syntaticErrorReturn = errorReturn(400)
export const unidentifiedErrorReturn = errorReturn(500)
export const notFoundErrorReturn = errorReturn(404)
export const updatedSuccessfullyReturn = successfulReturn(200)
