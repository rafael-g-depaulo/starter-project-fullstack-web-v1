export default ({
  model: Model,
  objectName,
  paramName = `${objectName}_id`,
  errorMsg = "404 object not found",
  ...defaultOptions
}) => (options = {}) => async (req, res, next) => {
  // get id from params
  const id = req.params[paramName]

  // get object
  const object = await Model.findByPk(id, { ...defaultOptions, ...options })
  
  // if dragon not found
  if (object === null) return res.status(404).json({ errorMsg })
  
  // add the object
  req[objectName] = object

  // call next middleware
  next()
}
