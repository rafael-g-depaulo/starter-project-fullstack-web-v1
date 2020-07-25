import bcrypt from 'bcrypt'

export const hash = (password, salt = 10) => bcrypt.hash(password, salt)

export const compare = (password, pHash) => bcrypt.compare(password, pHash)
