import express from 'express'

// use dependency injection in module
export default (db, config) => express.Router(config)
  // index
  .get('/', (req, res) => db.Email.findAll()
    .then(queryResult => res.json(queryResult))
    .catch(err => res.json({error: err}))
  )