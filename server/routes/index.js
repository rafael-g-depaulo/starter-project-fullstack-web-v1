import express from 'express'
import EmailRouter from './email'
import UserRouter from './user'

// use dependency injection in module
export default (db, config = { mergeParams: true }) => express.Router(config)
// add routes
  .use('/email', EmailRouter(db, config))
  .use('/user', UserRouter(db, config))