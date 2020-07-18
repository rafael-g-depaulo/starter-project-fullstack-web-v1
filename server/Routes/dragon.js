import { Router } from 'express'

// use dependency injection in module
export default ({ Dragon }, config) => Router(config)
  // index
  .get('/', (req, res) => Dragon.findAll()
    .then(queryResult => res.json(queryResult))
    .catch(error => res.status(500).json({ error }))
  )
  .post("/create", (req, res) => {
    const { name } = req.body
    Dragon.create({ name })
      .then(d => res.json({dragon: d}))
      .catch(err => res.status(500).json(err))
  })
