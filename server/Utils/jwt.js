import jwt from "jsonwebtoken"

const secret = process.env.JWT_SECRET_KEY ?? "safsdfgksdglkjsnfl"

// Transform jwt.verify into Promise format
export const veryfyToken = (token, options = {}) => new Promise((resolve, reject) => {
  jwt.verify(
    token, secret, options,
    (err, decoded) => err ? reject(err) : resolve(decoded)
  )
})

const defaultCreateOptions = {
  expiresIn: process.env.JWT_EXPIRATION_TIME ?? "1d",
}
export const createToken = (payload, options = {}) => jwt
  .sign(payload, secret, { ...defaultCreateOptions, ...options })
