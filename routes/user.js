import express from 'express'

// use dependency injection in module
export default (db, config) => express.Router(config)
  // index
  .get('/', (req, res) => {
    db.query(`SELECT * FROM test;`)
    .then(queryResult => res.json([...queryResult.rows, { id: 88, nome: "Marcos" }]))
    .catch(err => res.json({error: err}))
  })