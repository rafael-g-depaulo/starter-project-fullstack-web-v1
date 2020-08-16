export default ({
  model: Model,
  objectName,
  errorMsg = `404 ${objectName} not found`,
  ...defaultOptions
}) => (options = {}) => async (req, res, next) => {

  // get objects
  const objects = await Model.findAll({ ...defaultOptions, ...options })
  
  // if objects not found
  if (objects === null) return res.status(404).json({ error: errorMsg })
  
  // add the object
  req[objectName] = objects

  // call next middleware
  next()
}
