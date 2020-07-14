import express from 'express'
import EmailRouter from './email'

// use dependency injection in module
export default (db, config = { mergeParams: true }) => express.Router(config)
// add routes
  .use('/email', EmailRouter(db, config))