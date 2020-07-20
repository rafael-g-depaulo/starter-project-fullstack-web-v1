import { Router } from 'express'
import getFromModel from 'Middlewares/getFromModel'

// use dependency injection in module
export default ({ Dragon, Title }, config) => {
  
  const getDragon = getFromModel({
    model: Dragon,
    objectName: "dragon",
    errorMsg: "404: dragon not found"
  })

  return Router(config)
    // index
    .get('/', (req, res) => Dragon
      .findAll({ include: [{ model: Title, as: 'titles' }] })
      .then(queryResult => res.json(queryResult))
      .catch(error => res.status(500).json({ error }))
    )
    .post("/create", (req, res) => {
      const { name } = req.body
      Dragon.create({ name })
        .then(dragon => res.json({ dragon }))
        .catch(err => res.status(500).json(err))
    })
    .post("/:dragon_id/addTitle", getDragon(), async (req, res) => {
      const { name } = req.body
      const { dragon } = req
      
      Title
        .create({ name, dragon_id: dragon.id })
        .then(newTitle => res.json({ newTitle, dragon }))
        .catch(err => res.status(504).json({ err: "error with title creation. please try again later" }))
      
    })
    .get("/:dragon_id", getDragon({ include: { model: Title, as: 'titles' } }), async (req, res) => {
      return res.json({ dragon: req.dragon })
    })
    .delete("/:dragon_id", async (req, res) => Dragon
      .destroy({ where: { id: req.params.dragon_id } })
      .then(destroyedRows => destroyedRows === 0
        ? res.status(404).json({ err: "404 dragon doesn't exist" } )
        : res.json({ msg: "dragon sucessfully deleted" })
      )
    )
    .delete("/:dragon_id/title/:title_id", getDragon({ include: { model: Title, as: 'titles' } }), async (req, res) => {
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
    })
    // TODO: make title:dragon relation NxM
}
