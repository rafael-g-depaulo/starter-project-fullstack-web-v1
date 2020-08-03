import TitleModel from "Models/Title"

export const deleteDragonTitle = ({ Title = TitleModel }) => async (req, res, next) => {
  const { title_id } = req.params
  const { dragon } = req

  const titleId = Number(title_id)

  // if dragon doesn't have that title
  if (!dragon.titles.some(title => title.id === titleId))
    return res.status(404).json({ err: "404 dragon doesn't have that title" })
  
  // destroy title
  const destroyedRows = await Title.destroy({ where: { id: titleId }})

  // this should never run, but if dragon has the title and the title doesn't exist in the db this runs
  if (destroyedRows === 0)
    res.status(404).json({ err: "404 title doesn't exist" } )

  // return dragon
  res.json({ msg: "title sucessfully deleted" })
}

export default deleteDragonTitle
