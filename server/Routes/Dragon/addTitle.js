export const addTitle = ({ Title }) => async (req, res, next) => {
  const { name } = req.body
  const { dragon } = req
  
  Title
    .findCreateFind({
      where: { name },
      defaults: { name },
    })
    .then(async ([title, isNew]) => {
      await dragon.addTitle(title)
      const titleObj = title.dataValues
      delete titleObj.updatedAt
      delete titleObj.createdAt
      res.json({
        msg: isNew ? "new title created" : "title added to dragon",
        title: titleObj,
        dragon,
      })
    })
    .catch(err => res.status(504).json({ err, msg: "error with title creation. please try again later" }))

}

export default addTitle
