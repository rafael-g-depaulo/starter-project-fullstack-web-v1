import jwt from "jsonwebtoken"

const secret = process.env.TOKEN_SECRET_KEY ?? "safsdfgksdglkjsnfl"

// Transform jwt.verify into Promise format
export const veryfy = (token, options = {}) => new Promise((resolve, reject) => {
  jwt.verify(
    token, secret, options,
    (err, decoded) => err ? reject(err) : resolve(decoded)
  )
})

const defaultCreateOptions = {
  expiresIn: parseInt(process.env.TOKEN_EXPIRATION_TIME ?? "1d"),
}
export const create = (payload, options = {}) => jwt
  .sign(payload, secret, { ...defaultCreateOptions, ...options })
