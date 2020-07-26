export const current = async (req, res, next) => {
  const user = req.user.dataValues
  delete user.password
  delete user.createdAt
  delete user.updatedAt
  
  if (!user) return res.status(401).json({ err })
  res.status(200).json({ user })
}

export default current
