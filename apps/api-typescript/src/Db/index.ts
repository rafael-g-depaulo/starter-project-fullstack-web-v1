import "reflect-metadata"
import { createConnection } from "typeorm"

import { User } from "./Entities/User"
import { config } from "./config"

console.log(config)

export default () => createConnection(config)
  .then(async connection => {

    console.log("Loading users from the database...")
    const users = await connection.manager.find(User)
    console.log("Loaded users: ", users)
  })
  // .catch(error => console.log(error))
