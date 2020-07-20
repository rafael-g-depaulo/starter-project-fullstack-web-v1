import Dragon from "Models/dragon"

export default (options = {}) => async (req, res, next) => {
  const { dragon_id } = req.params

  // get dragon
  const dragon = await Dragon.findByPk(dragon_id, options)
  
  // if dragon not found
  if (dragon === null) return res.status(404).json({ err: "404: dragon not found" })
  
  // add the dragon
  req.dragon = dragon

  // call next middleware
  next()
}
