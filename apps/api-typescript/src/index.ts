import express from 'express'
import { add } from '@starter-project/adder'

const app = express()

app.listen(3000, () =>
  console.log(`listening PORT ${add(3000, 23)}, in typescript!`))
