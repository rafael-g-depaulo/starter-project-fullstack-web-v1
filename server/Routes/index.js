import express from 'express'

// import EmailRouter from './email'

// import Email from "Models/Email"

// use dependency injection in module
export default ({ }, config = { mergeParams: true }) => express.Router(config)
// add routes
  // .use('/email', EmailRouter({ Email }, config))
