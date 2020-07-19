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
    const newTitle = await Title.create({ name, dragon_id: dragon.id })

    console.log(dragon_id, name, newTitle)

    res.json({ newTitle, dragon })
  })
  .delete("/:dragon_id", async (req, res) => {
    const { dragon_id } = req.params

    const deletedId = await Dragon.destroy({ where: { id: dragon_id } })

    res.json({ msg: "dragon sucessfully deleted", id: deletedId })
  })
  // TODO: add removal of titles
  // TODO: make title:dragon relation NxM
