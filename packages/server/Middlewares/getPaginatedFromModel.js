export default ({
  // model config
  model: Model,
  objectName,

  // pagination config
  pageQueryName = "page",
  limitQueryName = "limit",
  objectsPerPage = 10,
  maxObjectsPerPage = 100,

  // error message
  errorMsg = `404 ${objectName} not found`,

  // default sequelize options
  ...defaultOptions
}) => (options = {}) => async (req, res, next) => {

  // get page number and page object count
  const page = Number(req.query[pageQueryName] ?? 1)
  const pageObjectCount = Number(req.query[limitQueryName] ?? objectsPerPage)

  // make sure limit is under the given maximum and a valid number
  const limit = pageObjectCount > 0 && pageObjectCount <= maxObjectsPerPage && !isNaN(pageObjectCount)
    ? pageObjectCount
    : objectsPerPage

  // make sure offset is above 0 and a valid number
  const givenOffset = limit * (page-1)
  const offset = givenOffset > 0 && !isNaN(givenOffset) ? givenOffset : 0
  
  // get objects
  const objects = await Model.findAll({
    // pagination
    offset,
    limit,
    // other options (can override pagination options)
    ...defaultOptions,
    ...options,
  })
  
  // if objects not found
  if (objects === null) return res.status(404).json({ error: errorMsg })
  
  // add the object
  req[objectName] = objects

  // call next middleware
  next()
}
