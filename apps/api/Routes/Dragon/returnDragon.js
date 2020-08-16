export const returnDragon = async (req, res, next) => {
  return res.json({ dragon: req.dragon })
}

export default returnDragon
