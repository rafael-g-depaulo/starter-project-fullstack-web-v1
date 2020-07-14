import jwt from "jsonwebtoken"

// Transform jwt.verify into Promise format
export const veryfy = (token, options) => new Promise((resolve, reject) => {
  jwt.verify(
    token, process.env.TOKEN_SECRET_KEY ?? secret, options,
    (err, decoded) => err ? reject(err) : resolve(decoded)
  )
})
