import express from 'express'

import DragonRouter from './dragon'

import Dragon from "Models/dragon"
import Title from "Models/title"

// use dependency injection in module
export default ({ }, config = { mergeParams: true }) => express.Router(config)
// add routes
  .use('/dragon', DragonRouter({ Dragon, Title }, config))
