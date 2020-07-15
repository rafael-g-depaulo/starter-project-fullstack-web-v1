import express from 'express'

// use dependency injection in module
export default ({ Email }, config) => express.Router(config)
  // index
  .get('/', (req, res) => Email.findAll()
    .then(queryResult => res.json(queryResult))
    .catch(error => res.status(500).json({ error }))
  )
