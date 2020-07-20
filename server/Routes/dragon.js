import { Router } from 'express'

// use dependency injection in module
export default ({ Dragon, Title }, config) => Router(config)
  // index
  .get('/', (req, res) => Dragon
    .findAll({ include: [{ model: Title, as: 'titles' }] })
    .then(queryResult => res.json(queryResult))
    .catch(error => res.status(500).json({ error }))
  )
  .post("/create", (req, res) => {
    const { name } = req.body
    Dragon.create({ name })
    .then(d => res.json({dragon: d}))
    .catch(err => res.status(500).json(err))
  })
  .post("/:dragon_id/addTitle", async (req, res) => {
    const { dragon_id } = req.params
    const { name } = req.body
    
    const dragon = await Dragon.findByPk(dragon_id)
    // if dragon not found
    if (dragon === null) return res.status(404).json({ err: "404: dragon not found" })
    
    const newTitle = await Title.create({ name, dragon_id: dragon.id })
    
    res.json({ newTitle, dragon })
  })
  .get("/:dragon_id", async (req, res) => {
    const { dragon_id } = req.params
    const dragon = await Dragon.findByPk(dragon_id, { include: { model: Title, as: 'titles' } })
    
    // if dragon not found
    if (dragon === null) return res.status(404).json({ err: "404: dragon not found" })
    
    return res.json({ dragon })
  })
  .delete("/:dragon_id", async (req, res) => {
    const { dragon_id } = req.params

    const deletedId = await Dragon.destroy({ where: { id: dragon_id } })

    res.json({ msg: "dragon sucessfully deleted", id: deletedId })
  })
  .delete("/:dragon_id/title/:title_id", async (req, res) => {
    const { dragon_id, title_id } = req.params
    const dragonId = Number(dragon_id)
    const titleId = Number(title_id)

    const dragon = await Dragon.findByPk(dragonId, { include: { model: Title, as: 'titles' } })
    
    // if dragon not found
    if (dragon === null) return res.status(404).json({ err: "404: dragon not found" })
    
    // if dragon doesn't have that title
    if (!dragon.titles.some(title => title.id === titleId))
      return res.status(404).json({ err: "404 dragon doesn't have that title" })
    
    // destroy title
    const destroyedRows = await Title.destroy({ where: { id: titleId }})

    // this should never run, but if dragon has a title that doesn't exist this runs
    if (destroyedRows === 0)
      res.status(404).json({ err: "404 title doesn't exist" } )

    // return dragon
    res.json({ msg: "title sucessfully deleted" })
  })
  // TODO: make title:dragon relation NxM
