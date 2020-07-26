import bcrypt from 'bcrypt'

export const createHash = (password, salt = 10) => bcrypt.hash(password, salt)

export const compareHash = (password, pHash) => bcrypt.compare(password, pHash)
