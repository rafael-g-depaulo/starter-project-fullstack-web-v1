import express from 'express'

import DragonRouter from './dragon'

import * as DDDD from "Models"
import Dragon from "Models/dragon"

// use dependency injection in module
export default ({ }, config = { mergeParams: true }) => express.Router(config)
// add routes
  .use('/dragon', DragonRouter({ Dragon }, config))
